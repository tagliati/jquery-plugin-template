/*!
 * jQuery ${NAME} - ${DESCRIPTION} - http://wbotelhos.com/${NAME_LOWER}
 * ------------------------------------------------------------------------
 *
 * jQuery ${NAME} ${FULL_DESCRIPTION}
 *
 * Licensed under The MIT License
 *
 * @version        0.1.0
 * @since          ${SINCE}
 * @author         Washington Botelho
 * @documentation  wbotelhos.com/${NAME_LOWER}
 * @twitter        twitter.com/wbotelhos
 *
 * Usage with default values:
 * ------------------------------------------------------------------------
 * $('#${NAME_LOWER}').${NAME_LOWER}();
 *
 * <div id="${NAME_LOWER}"></div>
 *
 * $('.${NAME_LOWER}').${NAME_LOWER}();
 *
 * <div class="${NAME_LOWER}"></div>
 * <div class="${NAME_LOWER}"></div>
 * <div class="${NAME_LOWER}"></div>
 *
 */

;(function($) {

	var methods = {
		init: function(options) {
			return this.each(function() {

				var opt		= $.extend({}, $.fn.${NAME_LOWER}.defaults, options),
					$this	= $(this);

				$this.data('options', opt);

				if ($this.data('${NAME_LOWER}')) {
					return;
				}

				$this.data('${NAME_LOWER}', true);

			});
		}, debug: function(message) {
			if (window.console && window.console.log) {
				window.console.log(message);
			}
		}
	};

	$.fn.${NAME_LOWER} = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist!');
		} 
	};

	$.fn.${NAME_LOWER}.defaults = {
		
	};

})(jQuery);
