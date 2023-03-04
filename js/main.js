var x = true;
var slideAtual = 0;
var ballAtual = 0
const sobre1 = $('#sobre-1 img');
const sobre2 = $('#sobre-2 img')
const sobre3 = $('#sobre-3 img')
const sobre4 = $('#sobre-4 img')
const balls = $('.ball');
const slides = $('.slide');
const next = $('.btn-left');
const prev = $('.btn-right');
const ballLeft = $('.one-ball');
const ballCenter = $('.two-ball');
const ballRight = $('.three-ball');


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
ballLeft.click(function() {
    slideAtual = 0
    showSlide(slideAtual)
});

ballCenter.click(function() {
    slideAtual = 1
    showSlide(slideAtual)
});

ballRight.click(function() {
    slideAtual = 2
    showSlide(slideAtual)
});

function teste() {
    if (this.className == 'img-seta-1 seta-footer') {
        if (x) {
            $('footer #sobre-1 a').css({
                'display':'block',
            })
            sobre1.css('transform','rotate(180deg)')
            x = false
        }else {
            $('footer #sobre-1 a').css({
                'display':'none'
            })
            sobre1.css('transform','rotate(0deg)')
            x = true
        }
    } else if (this.className == 'img-seta-2 seta-footer') {
        if (x) {
            $('footer #sobre-2 a').css({
                'display':'block',
            })
            sobre2.css('transform','rotate(180deg)')
            x = false
        }else {
            $('footer #sobre-2 a').css({
                'display':'none'
            })
            sobre2.css('transform','rotate(0deg)')
            x = true
        }
    } else if (this.className == 'img-seta-3 seta-footer') {
        if (x) {
            $('footer #sobre-3 a').css({
                'display':'block',
            })
            sobre3.css('transform','rotate(180deg)')
            x = false
        }else {
            $('footer #sobre-3 a').css({
                'display':'none'
            })
            sobre3.css('transform','rotate(0deg)')
            x = true
        }
    } else {
        if (x) {
            $('footer #sobre-4 a').css({
                'display':'block',
            })
            sobre4.css('transform','rotate(180deg)')
            x = false
        }else {
            $('footer #sobre-4 a').css({
                'display':'none'
            })
            sobre4.css('transform','rotate(0deg)')
            x = true
        }
    }
}

sobre1.click(teste)
sobre2.click(teste)
sobre3.click(teste)
sobre4.click(teste)

/*

});
*/