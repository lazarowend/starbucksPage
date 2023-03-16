var x = true;
var slideAtual = 0;
var ballAtual = 0
const arrows = $('.sobre img');
const balls = $('.ball');
const slides = $('.slide');
const next = $('.btn-left');
const prev = $('.btn-right');


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
balls.click(function() {
    var x = $(this).attr('target')
    console.log(x - 1)
    showSlide(x - 1);
})


function mostrarLink(i, sobre) {
    if (x) {
        $('footer .sobre-'+i+' a').css({
            'display':'block',
        })
        sobre.css('transform','rotate(180deg)')
        x = false
    }else {
        $('footer .sobre-'+i+' a').css({
            'display':'none'
        })
        sobre.css('transform','rotate(0deg)')
        x = true
    }
}

arrows.click(function() {
    var x = $(this).attr('target')
    mostrarLink(x, $(this))
})