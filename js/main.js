var x = true;
var slideAtual = 0;
var ballAtual = 0
const arrow_1 = $('#sobre-1 img');
const arrow_2 = $('#sobre-2 img')
const arrow_3 = $('#sobre-3 img')
const arrow_4 = $('#sobre-4 img')
const balls = $('.ball');
const slides = $('.slide');
const next = $('.btn-left');
const prev = $('.btn-right');
const ball_0 = $('.one-ball');
const ball_1 = $('.two-ball');
const ball_2 = $('.three-ball');

// função para fechar o menu mobile pela parte transparente do background
$('nav .dark').click(function() {
    $('.dark').css({
        'visibility':'hidden',
    });
    $('.aside-mobile').css({
        'visibility':'hidden',
        'width':'0px',
    });
})

// função para abrir e fechar o menu mobile junto com o background transparente
$('.nav-mobile').click(function() {
    if (x) {
        $('.aside-mobile').css({
            'visibility':'visible',
            'width':'300px',
            'z-index':'3'
        });
        $('nav .dark').css({
            'visibility':'visible',
            'z-index':'2'
        })
        x = false;
    } else {
        $('.aside-mobile').css({
            'visibility':'hidden',
            'width':'0px',
        });
        $('.aside-mobile').css({
            'visibility':'hidden',
            'width':'0px',
        });
        x = true;
    }
});

// função para mostrar o slide e qual ball se refere o slide
function showSlide(index) {
    slides.removeClass('active');
    slides.eq(index).addClass('active');
    balls.removeClass('active');
    balls.eq(index).addClass('active');
};

// função para voltar ao slide anterior
function prevSlide() {
    slideAtual ++;
    if (slideAtual > slides.length - 1) {
        slideAtual = 0;
    }
    showSlide(slideAtual);
}

// função para o próximo slide
function nextSlide() {
    slideAtual --;
    if (slideAtual < 0) {
        slideAtual = slides.length -1;
    }   
    showSlide(slideAtual);
}
setInterval(nextSlide, 5000); // roda o slide a cada 5 segundos

next.click(nextSlide);
prev.click(prevSlide)

// funções para mover o slide pelas bolinhas
ball_0.click(function() {
    slideAtual = 0
    showSlide(slideAtual)
});

ball_1.click(function() {
    slideAtual = 1
    showSlide(slideAtual)
});

ball_2.click(function() {
    slideAtual = 2
    showSlide(slideAtual)
});

function arrow() {
    if (this.className == 'img-seta-1 seta-footer') {
        if (x) {
            $('footer #sobre-1 a').css({
                'display':'block',
            })
            arrow_1.css('transform','rotate(180deg)')
            x = false
        }else {
            $('footer #sobre-1 a').css({
                'display':'none'
            })
            arrow_1.css('transform','rotate(0deg)')
            x = true
        }
    } else if (this.className == 'img-seta-2 seta-footer') {
        if (x) {
            $('footer #sobre-2 a').css({
                'display':'block',
            })
            arrow_2.css('transform','rotate(180deg)')
            x = false
        }else {
            $('footer #sobre-2 a').css({
                'display':'none'
            })
            arrow_2.css('transform','rotate(0deg)')
            x = true
        }
    } else if (this.className == 'img-seta-3 seta-footer') {
        if (x) {
            $('footer #sobre-3 a').css({
                'display':'block',
            })
            arrow_3.css('transform','rotate(180deg)')
            x = false
        }else {
            $('footer #sobre-3 a').css({
                'display':'none'
            })
            arrow_3.css('transform','rotate(0deg)')
            x = true
        }
    } else {
        if (x) {
            $('footer #sobre-4 a').css({
                'display':'block',
            })
            arrow_4.css('transform','rotate(180deg)')
            x = false
        }else {
            $('footer #sobre-4 a').css({
                'display':'none'
            })
            arrow_4.css('transform','rotate(0deg)')
            x = true
        }
    }
}

arrow_1.click(arrow)
arrow_2.click(arrow)
arrow_3.click(arrow)
arrow_4.click(arrow)
