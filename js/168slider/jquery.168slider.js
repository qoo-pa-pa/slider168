(function($){
	
    $.fn.slider168 = function(option){

		var defaults = {
			paddingBottom	: '100px',
			paddingTop		: '50px'
		}
		
        var settings = $.extend(defaults, option);


        return this.each(function(i){
			
			var paddingBottom, paddingTop;
			
			console.log('i : ' + i + ' ->');
			console.log( $(this) );
			
			/* コンテナの幅を決定
			   $container : ユーザ指定のDOM
			   container_width : $containerの幅
			---------------------------- */
			var $container = $(this);
			var container_width = $container.parent().width();
			console.log( container_width );
			$container.css('width', container_width );
			
			
			/* コンテナ内の要素を調査
			   int_number_of_element_in_container : コンテナ内の要素数（スライドする要素数）
			---------------------------- */
			var int_number_of_element_in_container;
			
			var hasUl_	= $(this).children('ul').length;	// 直下に<ul>が存在するかどうか
			var hasOl_	= $(this).children('ol').length;	// 直下に<ol>が存在するかどうか
			var hasImg_	= $(this).children('img').length;	// 直下に<img>が存在するかどうか
			console.log('hasUl_ : ' + hasUl_);
			console.log('hasOl_ : ' + hasOl_);
			console.log('hasImg_ : ' + hasImg_);
			
			if(hasUl_){
				int_number_of_element_in_container = $container.children('ul').find('li').length;
			} else if(hasOl_){
				int_number_of_element_in_container = $container.children('ol').find('li').length;
			} else if(hasImg_){
				int_number_of_element_in_container = $container.children('img').length;
			}
			console.log('int_number_of_element_in_container : ' + int_number_of_element_in_container);
			
			/* option （ユーザ指定オプションがあった場合）
			   paddingBottom	: 
			   paddingTop		:
			---------------------------- */
			if(settings.paddingBottom){
				$container
					.css('padding-bottom', settings.paddingBottom);
			} else {
				
			}

			$(this).find($('img'))
				.css({
					'width': '100%',
					'height': 'auto'});

        });
    };
})(jQuery);
