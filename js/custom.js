/*! Modales */

function closePopup() {
    $.magnificPopup.close()
}

/*! Slider bloc 2 */
$(document).ready(function(){
    $('.agissons-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                mobileFirst: true
              }
            }
        ]
    })
})

/*! Liens dons avec montants */
let buttonDon = $('button[class="clickButtonDon"]'),
    inputDon = $('input[class="clickButtonDon"]'),
    euroInputDon = $('#boutons_dons .euros'),
    divInputDon = $('#boutons_dons .input-don'),
    spanDeduction = $('.deduction span'),
    buttonValue = 100
$('button[value="100"]').addClass('buttonDon-clicked')
spanDeduction.prepend(buttonValue-(buttonValue*66/100).toFixed(0))
buttonDon.click(function(){
    buttonDon.removeClass('buttonDon-clicked')
    inputDon.removeClass('buttonDon-clicked inputOn')
    $(this).addClass('buttonDon-clicked')
    buttonValue = $(this).val()
    spanDeduction.empty()
    spanDeduction.prepend(buttonValue-(buttonValue*66/100).toFixed(0))
    inputDon.val('Autre montant')
    inputDon.removeClass('buttonDon-clicked inputOn')
    divInputDon.removeClass('buttonDon-clicked inputOn')
    euroInputDon.empty()
})
divInputDon.click(() => {
    if (inputDon.val() == 'Autre montant') {
        inputDon.val('')
    }
    buttonDon.removeClass('buttonDon-clicked')
    inputDon.addClass('buttonDon-clicked inputOn')
    divInputDon.addClass('buttonDon-clicked inputOn')
    euroInputDon.empty()
    euroInputDon.prepend('€')
 })
inputDon.on('input', function(){
    this.value=this.value.replace(/[^0-9]/g,'');
    buttonValue = inputDon.val()
    spanDeduction.empty()
    spanDeduction.prepend(buttonValue-(buttonValue*66/100).toFixed(0))
})
$('.valueSelect').click(function() {
    $('a.liendon').attr('href', 'https://dons.fnh.org/lp-ecoacteur21/fill?engagement=don_simple&montant='+buttonValue)
})




/*! Démarrage des animations à l'affichage */

function isElementInViewport(elem) {
    let $elem = $(elem);
    // Get the scroll position of the page.
    let scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit, blink') != -1) ? 'body' : 'html');
    let viewportTop = $(scrollElem).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    // Get the position of the element on the page.
    let elemTop = Math.round( $elem.offset().top );
    let elemBottom = elemTop + $elem.height();
    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

$(document).ready(() => {
        startSliderHomeAnimationTxt()
    })

function startSliderHomeAnimationTxt() {
    let $elem = $('.txtToAnimate');
    // If the animation has already been started
    if ($elem.hasClass('start-slide-txt-animate')) return;
    if (isElementInViewport($elem)) {
    // Start the animation
        $elem.addClass('start-slide-txt-animate');
    }
}

function startAnimationCircles() {
    let $elem = $('#cercles > div > svg > .circle');
    if ($elem.hasClass('start')) return;
    if (isElementInViewport($elem)) {
        $elem.addClass('start');
    }
}
    // Capture scroll events
$(window).scroll(function(){
    startAnimationCircles();
});