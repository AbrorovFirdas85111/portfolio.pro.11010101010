$(document).ready(function() {
    // Sahifa yuklanganda animatsiyalarni ishga tushirish
    $('body').addClass('loaded');
    $('.fade-in').each(function(index) {
        $(this).delay(200 * index).queue(function(next) {
            $(this).addClass('fade-in');
            next();
        });
    });

    // Navbar tugmalariga hover effekti qo'shish
    $('.nav-link').hover(
        function() {
            $(this).css('color', '#ffc107').css('text-decoration', 'underline');
        },
        function() {
            $(this).css('color', '#fff').css('text-decoration', 'none');
        }
    );

    // Loyiha kartochkalariga klik hodisasi qo'shish
    $('.card').click(function() {
        alert('Loyiha haqida ko‘proq ma’lumot uchun veb-saytimizga tashrif buyuring!');
    });

    // Forma validatsiyasi va yuborish funksiyasi
    $('#contact form').submit(function(e) {
        e.preventDefault();
        
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let message = $('#message').val().trim();

        if (name === '' || email === '' || message === '') {
            alert('Iltimos, barcha maydonlarni to‘ldiring!');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Noto‘g‘ri email format! Iltimos, to‘g‘ri email kiriting.');
            return false;
        }

        // Forma muvaffaqiyatli yuborilganda xabar ko‘rsatish
        alert('Xabar muvaffaqiyatli yuborildi! Tez orada siz bilan bog‘lanamiz.');
        $(this).trigger('reset');
        $('#name, #email, #message').removeClass('is-invalid').removeClass('is-valid');
    });

    // Email validatsiya funksiyasi
    function isValidEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Forma inputlariga real-time tekshiruv
    $('#name, #email, #message').on('input', function() {
        let input = $(this);
        if (input.val().trim() === '') {
            input.addClass('is-invalid').removeClass('is-valid');
        } else {
            input.removeClass('is-invalid').addClass('is-valid');
        }
    });

    // "Yuqoriga qaytish" tugmasi funksiyasi
    $('#top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Loyiha kartochkalariga hover effekti qo'shish
    $('.card').hover(
        function() {
            $(this).css('transform', 'scale(1.05)').css('box-shadow', '0 10px 20px rgba(0, 0, 0, 0.2)');
        },
        function() {
            $(this).css('transform', 'scale(1)').css('box-shadow', '0 5px 15px rgba(0, 0, 0, 0.1)');
        }
    );

    // Progress barlarni animatsiyali ko‘rsatish
    $('.progress-bar').each(function() {
        let width = $(this).attr('style').match(/width: (\d+)%/)[1];
        $(this).width(0).animate({
            width: width + '%'
        }, 1000);
    });

    // Aloqa formasining fokus effektlari
    $('#contact .form-control').focus(function() {
        $(this).css('border-color', '#007bff').css('box-shadow', '0 0 5px rgba(0,123,255,0.5)');
    }).blur(function() {
        $(this).css('border-color', '#ced4da').css('box-shadow', 'none');
    });

    // Sahifa skrollida navbar rangini o'zgartirish
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').css('background-color', '#343a40').css('box-shadow', '0 2px 10px rgba(0, 0, 0, 0.2)');
        } else {
            $('header').css('background-color', '#212529').css('box-shadow', '0 2px 5px rgba(0, 0, 0, 0.1)');
        }
    });

    // Footer sanasini dinamik tarzda yangilash
    let currentYear = new Date().getFullYear();
    $('footer p:first').text('© ' + currentYear + ' Firdavs. Barcha huquqlar himoyalangan.');

    // Loyiha rasmlariga zoom effekti qo'shish
    $('.card-img-top').hover(
        function() {
            $(this).css('transform', 'scale(1.1)').css('opacity', '0.7');
        },
        function() {
            $(this).css('transform', 'scale(1)').css('opacity', '1');
        }
    );

    // Sahifa skrollida sectionlarni highlight qilish
    $(window).scroll(function() {
        $('section').each(function() {
            let sectionTop = $(this).offset().top;
            let sectionBottom = sectionTop + $(this).outerHeight();
            let scrollTop = $(window).scrollTop();

            if (scrollTop >= sectionTop - 50 && scrollTop < sectionBottom - 50) {
                let id = $(this).attr('id');
                $('.nav-link').removeClass('active');
                $('.nav-link[href="#' + id + '"]').addClass('active').css('color', '#ffc107');
            }
        });
    });

    // Initial active class qo'shish
    $('.nav-link:first').addClass('active');
});

// Sahifa yuklanishini kutish uchun qo'shimcha funksiya
$(window).on('load', function() {
    $('#loading').fadeOut('slow');
});