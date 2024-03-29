jQuery(function()
{
    $ = jQuery ;
    $(window).load( function() {
        $('.external-link').unbind('click');    
    });    

    $('.banner').unslider({fluid: true});
    $(window).on("load scroll resize", function(){
        banner_height = ($(document).width()/1920) * 760;

        $('.banner').height(banner_height);
        $('.banner ul li').height(banner_height);
        if(banner_height > 280){
            caption_margin_top = (banner_height-250)/2;
            $('.banner .slide_caption:hidden').show();
            $('.banner .slide_caption').css({"margin-top":caption_margin_top});
        }else{
            $('.banner .slide_caption').hide();
        }
        $("#templatemo_banner_slide > ul > li").css({"background-size":"cover"});
    });

    hide_left = $(document).width();
    $("#mobile_menu").css({left: hide_left});
    $("#mobile_menu").hide();
    $("#mobile_menu_btn a").click(function(){
        if($('#mobile_menu').is(':visible')) {
            hide_left = $(document).width();
            $("#mobile_menu").animate({left: hide_left},1000,function(){
                $("#mobile_menu").hide();
            });
        }else{
            $("#mobile_menu").show();
            show_left = $(document).width() - 250 ;
            $("#mobile_menu").animate({left: show_left},1000);
        }
        return false;
    });
    jQuery.fn.anchorAnimate = function(settings) {
        settings = jQuery.extend({
            speed : 1100
        }, settings);	
        return this.each(function(){
            var caller = this
            $(caller).click(function (event){
                event.preventDefault();
                var locationHref = window.location.href;
                var elementClick = $(caller).attr("href");
                var destination = $(elementClick).offset().top ;

                hide_left = $(document).width();
                $("#mobile_menu").animate({left: hide_left},1000,function(){
                    $("#mobile_menu").hide();
                });

                $("html,body").stop().animate({ scrollTop: destination}, settings.speed, function(){
le
                    if(history.pushState) {
                        history.pushState(null, null, elementClick);
                    }
                });
                return false;
            });
        });
    }

    $("#mobile_menu a").anchorAnimate();

    $("#templatemo_main_menu ul").singlePageNav({offset: jQuery('#templatemo_main_menu').outerHeight()});

    $(window).on("resize scroll load",function(){
        top_banner_and_slider_height = $("#templatemo_banner_top").outerHeight() + $("#templatemo_banner_slide").outerHeight() +  $("#templatemo_banner_logo").outerHeight() ;
        if($(document).scrollTop() < (top_banner_and_slider_height - $(window).height() + 105) ){
            menu_top = $(document).scrollTop() + $(window).height() - 105 ;
            $("#templatemo_main_menu").css({"position":"absolute","top":menu_top});
        }else if( $(document).scrollTop() < top_banner_and_slider_height ){
            menu_top = 0;
            $("#templatemo_main_menu").css({"position":"relative","top":menu_top});
        }else{
            menu_top = 0;
            $("#templatemo_main_menu").css({"position":"fixed","top":menu_top});
        }
    });

    $(document).scroll(function(){
        document_top = $(document).scrollTop();
        event_wapper_top = $("#templatemo_upcomming_event").position().top;
        if(document_top<event_wapper_top){
            event_animate_num = event_wapper_top - document_top;
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#templatemo_upcomming_event .event_animate_left").css({'left': -event_animate_num,'opacity':event_animate_alpha});
            $("#templatemo_upcomming_event .event_animate_right").css({'left':event_animate_num,'opacity':event_animate_alpha});
        }else{
            $("#templatemo_upcomming_event .event_animate_left").css({'left': 0,'opacity':1});
            $("#templatemo_upcomming_event .event_animate_right").css({'left':0,'opacity':1});
        }
    });

    $(document).scroll(function(){
        document_top = $(document).scrollTop()-1000;
        event_wapper_top = $("#templatemo_pricing").position().top-1110;
        if(document_top<event_wapper_top){
            degree = (360/event_wapper_top)*(document_top);
            event_animate_num = event_wapper_top - document_top;
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#templatemo_pricing .pricing_icon_wapper span").css({
                        '-webkit-transform': 'rotate(' + degree + 'deg)',
                        '-moz-transform': 'rotate(' + degree + 'deg)',
                        '-ms-transform': 'rotate(' + degree + 'deg)',
                        '-o-transform': 'rotate(' + degree + 'deg)',
                        'transform': 'rotate(' + degree + 'deg)',
            });
            $("#templatemo_pricing .pricing_icon_wapper").css({
                        'opacity':event_animate_alpha
            });
        }else{
            $("#templatemo_pricing .pricing_icon_wapper span").css({
                        '-webkit-transform': 'rotate(' + 360 + 'deg)',
                        '-moz-transform': 'rotate(' + 360 + 'deg)',
                        '-ms-transform': 'rotate(' + 360 + 'deg)',
                        '-o-transform': 'rotate(' + 360 + 'deg)',
                        'transform': 'rotate(' + 360 + 'deg)',
            });
            $("#templatemo_pricing .pricing_icon_wapper").css({
                        'opacity':1
            });
        }
    });

    $(document).scroll(function(){
        document_top = $(document).scrollTop()-2000;
        event_wapper_top = $("#templatemo_blog").position().top-2110;
        if(document_top<event_wapper_top){
            event_animate_num = event_wapper_top - document_top;
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#templatemo_blog .event_animate_left").css({'left': -event_animate_num,'opacity':event_animate_alpha});
            $("#templatemo_blog .event_animate_right").css({'left':event_animate_num,'opacity':event_animate_alpha});
        }else{
            $("#templatemo_blog .event_animate_left").css({'left': 0,'opacity':1});
            $("#templatemo_blog .event_animate_right").css({'left':0,'opacity':1});
        }
    });

    $(document).scroll(function(){
        document_top = $(document).scrollTop()-3000;
        event_wapper_top = $("#templatemo_contact").position().top-3110;
        if(document_top<event_wapper_top){
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#templatemo_contact p, #templatemo_contact_map_wapper").css({'opacity':event_animate_alpha});
        }else{
            $("#templatemo_contact p, #templatemo_contact_map_wapper").css({'opacity':1});
        }
    });
});
