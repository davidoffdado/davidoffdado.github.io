$(document).ready(function(){
    // MUST REFACTOR THIS

    $('#articoli').on('click', function(){
        $('.nav-item').css('color', '#adadad');
        $('#about-section').css('display','none');
        $('#articoli-section').css('display','block').css('transition','0.2s');

        $('#articoli').addClass('selected-nav');
        $('#about').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

    $('#about').on('click', function(){
        $('.nav-item').css('color', '#adadad');
        $('#articoli-section').css('display','none');
        $('#about-section').css('display','block').css('transition','0.2s');

        $('#about').addClass('selected-nav');
        $('#articoli').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

});

