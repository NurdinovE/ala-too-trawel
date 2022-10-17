    $(document).ready(function(){
    $('.carousel__inner').slick({
        autoplay: true,
        speed: 1200,
        prevArrow: "<button type=\"button\" class=\"slick-prev\"><</button>",
        nextArrow: "<button type=\"button\" class=\"slick-next\">></button>",
    })
        $('ul.catalog__tabs').on('click', 'li:not(catalog__tabs_active)', function() {
            $(this)
                .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });
    $('.catalog-item__link').each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault()
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
            })
        })
        $('.catalog-item__back').each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault()
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
            })
        })
        $('[data-modal=consultation]').on('click', function () {
            $('.overlay, #consultation').fadeIn()
        })
        $('.modal__close').on('click', function () {
            $('.overlay, #consultation, #order, #thanks').fadeOut()
        })
        $('.btn_mini').on('click', function () {
            $('.overlay, #order').fadeIn()
        })
        $('.button_submit').on('click', function () {
            $('.overlay, #thanks').fadeIn()
        })
        $(function(){
            $("#phone").mask("+999(999) 99-99-99");
        });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000){
            $('.pageup').fadeIn()
        }else
            $('.pageup').fadeOut()

    })
    });

