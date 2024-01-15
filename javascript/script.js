$(document).ready(function(){
    // MUST REFACTOR THIS

    $('#italia').on('click', function(){
        $('.nav-item').css('color', '#adadad');
        $('#medio-oriente-section').css('display','none');
	$('#ucraina-section').css('display','none');
        $('#about-section').css('display','none');
        $('#italia-section').css('display','block').css('transition','0.2s');

        $('#italia').addClass('selected-nav');
        $('#medio-oriente').removeClass('selected-nav');
	$('#ucraina').removeClass('selected-nav');
        $('#about').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

    $('#medio-oriente').on('click',function() {
        $('.nav-item').css('color', '#adadad');
        $('#italia-section').css('display','none');
	$('#ucraina-section').css('display','none');
        $('#about-section').css('display','none');
        $('#medio-oriente-section').css('display','block').css('transition','0.2s');

        $('#medio-oriente').addClass('selected-nav');
        $('#italia').removeClass('selected-nav');
	$('#ucraina').removeClass('selected-nav');
        $('#about').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

    $('#ucraina').on('click', function(){
        $('.nav-item').css('color', '#adadad');
        $('#medio-oriente-section').css('display','none');
        $('#italia-section').css('display','none');
	$('#about-section').css('display','none');
        $('#ucraina-section').css('display','block').css('transition','0.2s');

        $('#ucraina').addClass('selected-nav');
        $('#italia').removeClass('selected-nav');
	$('#about').removeClass('selected-nav');
        $('#medio-oriente').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

    $('#about').on('click', function(){
        $('.nav-item').css('color', '#adadad');
        $('#medio-oriente-section').css('display','none');
	$('#ucraina-section').css('display','none');
        $('#italia-section').css('display','none');
        $('#about-section').css('display','block').css('transition','0.2s');

        $('#about').addClass('selected-nav');
        $('#italia').removeClass('selected-nav');
        $('#medio-oriente').removeClass('selected-nav');
	$('#ucraina').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

});

