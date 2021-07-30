if (window.SimpleAnime) {
    new SimpleAnime();
}

if (window.SimpleSlide) {    
    new SimpleSlide({
        slide: 'quote', // nome do atributo data-slide="principal"
        time: 3500, // tempo de transição dos slides
    });
    new SimpleSlide({
        slide: 'portfolio', // nome do atributo data-slide="principal"
        nav: true, // se deve ou não mostrar a navegação
        time: 10000, // tempo de transição dos slides
    });
}

