$(".navbar-nav .nav-item a").click(function(){
    $(this).parent().addClass('active1').siblings().removeClass('active1')
    var hr=$(this).attr("href");
    var secOffset=$(hr).offset().top;
    $("body").animate({

        scrollTop:secOffset
    },1000)

  
})
$(window).scroll(function(){
    if($(window).scrollTop()>800)
    {
        $('.btn-up button').fadeIn(200);
    }
    else{
        $('.btn-up button').fadeOut(200)
    }
});
$('.btn-up .btn').click(function(){

    $('body').animate({scrollTop:0},1200);

})

/*sync active link
$(window).scroll(function(){
    $('section').each(function()
    {
        if( $(window).scrollTop() >= $(this).offset().top )
        {
            var secId=$(this).attr('id');

            $('.navbar .nav-item a[href="#'+secId+'"]').parent().addClass('active1').siblings().removeClass('active1');
            console.log( secId)
        }
    })
})
*/





