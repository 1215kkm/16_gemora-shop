

let gnbHtml = $('.pc_nav .gnb').clone()
$('.mo_gnb .gnb_wrap').html(gnbHtml)

// 순수스크립트 = 바닐라스크립트
// let gnbHtml = document.querySelector('.pc_nav .gnb').innerHTML;
// document.querySelector('.mo_gnb').innerHTML = gnbHtml

$('.hamburger').click(function(){
    $(this).toggleClass('on');
    $('.mo_gnb').fadeToggle()
    $('.mo_gnb').toggleClass('on');

    // let h1Img = $('header h1 img')
    // let h1ImgSrc = h1Img.attr('src')

    // if(h1ImgSrc.indexOf('_w') == -1){
    //     h1Img.attr('src','images/logo_w.png')
    // } else {
    //     h1Img.attr('src','images/logo.png')
    // }
});

$('.mo_gnb .gnb_wrap > .gnb > li > a').click(function(){
    $('.lnb_box').slideUp();
    $(this).siblings('.lnb_box').stop().slideToggle();
    if($(this).siblings().attr('class').indexOf('lnb_box') >= 0){
        return false;
    };    
});



// pc메뉴
$('.pc_nav .gnb > li').mouseenter(function(){
    let liPosi = $(this).offset().left;
    let liW = $(this).width() / 2;
    $('.pc_nav .g').css({left:liPosi + liW, opacity:1});

    $(this).find('.lnb_box').fadeIn().css({display:'flex'});
});

$('.pc_nav .gnb > li').mouseleave(function(){
    $('.pc_nav .g').css({opacity:0});
    
    $('.pc_nav .lnb_box').fadeOut();
});