

$('.gnb > li').mouseenter(function(){
    let liPosi = $(this).offset().left;
    let liW = $(this).width() / 2;
    $('nav .g').css({left:liPosi + liW, opacity:1});

    $(this).find('.lnb_box').fadeIn().css({display:'flex'});
});

$('.gnb > li').mouseleave(function(){
    $('nav .g').css({opacity:0});
    
    $('.lnb_box').fadeOut();
});