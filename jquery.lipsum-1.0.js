/**
 * lipsum generator jquery plugin using json-lipsum
 * @author Ádám Mészáros - triptonemeister@gmail.com
 */
(function( $ ){

	// the url for json lipsum 
	var lipsumURL = "http://json-lipsum.appspot.com/";

	// using a sequence to allwas return unique callback function name
	// it is useful if paralell requests are runing
	var cbSeq = 1000;

	/**
	 * jqLipsum requests a Lorem ipusm string 
	 * @param [String] - any tagname if empty string used just a text node generated, by default p
	 * @param [Number] - (optional) the number of items to generate, by default 5
	 * @param [String] - (optional) can be paras|words|bytes|lists , by default paras
	 * @param [String/Boolean] - (optional) start with Lorem ipsum... can be yes|no|true|false , by default yes
	 */
	$.fn.jqLipsum = function(tag,amount,what,start) {
		//prepare arguments
		tag = tag||'p';

		amount = parseInt(amount,10)||5;

		what = typeof what == 'string' && 
			  'paras|words|bytes|lists'.indexOf(what) != -1? 
					what: 'paras';

		start = typeof start == 'string'? 
					(start == 'yes' ? 'yes': 'no'): 
					(start == true || start == undefined? 'yes': 'no');

		// prepare callback
		var currCb = function (result) {

			var data = result.lipsum;
			if (typeof data == 'string') data = [data];
			var start = tag != ''? '<'+tag+'>': '';
			var end = tag != ''? '</'+tag+'>': '';
			var glue = tag != ''? '</'+tag+'><'+tag+'>': '';

			this.append(start+data.join(glue)+end);
		};

		// this reference for the callback closure
		var self = this;
		
		// making temoporary function
		window['jqLipsumCb'+cbSeq] = (function () {
			return function (result) {
				currCb.call(self,result);
				delete window['jqLipsumCb'+cbSeq];
			};
		})();
		
		// get lipsum
		$.getScript(lipsumURL + '?amount='+amount +'&what='+what +'&start='+start + '&callback=jqLipsumCb'+ (cbSeq++));
		
		// and don't forget return this for chaining
		return this;
	};
})( jQuery );