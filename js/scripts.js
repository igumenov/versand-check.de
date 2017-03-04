$(document).ready(function(){   
    
     
    if ($(window).width() <= '995'){
            $("header").unstick();
    }else{
        $("header").sticky({topSpacing:0});
    };
    
    $menuLeft = $('.pushmenu-left');
    $nav_list = $('#nav_list');    
    $nav_list.click(function() {
        $(this).toggleClass('active');
        $('.pushmenu-push').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open');
    }); 
    
    
    $('.slider').slick({
        fade: true,
    });
    
    
    $(".set > a").on("click", function(){
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            //$(".set > a i").removeClass("glyphicon-collapse-up").addClass("glyphicon-collapse-down");
        }else{
            //$(".set > a i").removeClass("glyphicon-collapse-up").addClass("glyphicon-collapse-down");
            //$(this).find("i").removeClass("glyphicon-collapse-down").addClass("glyphicon-collapse-up");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }    
    });
    
    
});