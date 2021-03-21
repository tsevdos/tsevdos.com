(function($){
	$.fn.easyinput = function(options) {
		
		if (options == 'light_theme' || options == undefined ) {
			// light theme defaults
			defaults = {
				position        : 'absolute',
				top             : '1px',
				left            : '1px',
				background      : '#fff',
				color           : '#000',
				fontsize        : '72px',
				padding         : '5px 20px',
				border          : '2px solid #8c8681',
				radius          : '10px'
			};
		} else if (options == 'dark_theme') {
			// dark theme defaults
			defaults = {
				position        : 'absolute',
				top             : '1px',
				left            : '1px',
				background      : '#2b2b2b',
				color           : '#fff',
				fontsize        : '72px',
				padding         : '5px 20px',
				border          : '2px solid #7e7e7e',
				radius          : '10px'
			};
		
		} else {
			defaults = {
				position        : 'absolute',
				top             : '1px',
				left            : '1px',
				background      : '#fff',
				color           : '#000',
				fontsize        : '72px',
				padding         : '5px 20px',
				border          : '2px solid #8c8681',
				radius          : '10px'
			};
		}
		
		// extend the default options with the custom ones.
		var options = $.extend(defaults, options);
		
		// creates the display div
		var easytInputBox = $('<div id="easytinputbox"></div>').prependTo('body').hide();
		
		return this.each(function() {
			
			easytInputBox.css({
				position        : options.position,
				top             : options.top,
				left            : options.left,
				background      : options.background,
				color           : options.color,
				'font-Size'     : options.fontsize,
				padding         : options.padding,
				border          : options.border,
				'border-radius'    : options.BorderRadius, //CSS3
				'-moz-border-radius' : options.radius, // Gecko
				'-webkit-border-radius' : options.radius // Webkit
			});
			
			//Write the plug in
			$(this).bind("keyup", function(e) {
			
				//Store the value of the input
				var $value = $(this).attr('value');
				
				//Get the text of the appropriat label
				var $label = $("label[for='" + $(this).attr('id') + "']").text();
				
				//If input is type of password
				if($(this).attr('type') == 'password') {
					//Reset the value.
					var passValue = '';
					
					for (i = 0; i < $value.length; i++) {
						passValue += '*';
					}
					
					//Set the temp passValue to $value
					$value = passValue;

				}
				
				//If a label for this input/textarea exists
				if ($label) {
					//Display the label and value text
					$('#easytinputbox').slideDown().text($label + $value);
				} else {
					//If the label wasn't specified display only the value.
					$('#easytinputbox').slideDown().text($value);
				}
				
			});
				
			
		});

	};
})(jQuery);