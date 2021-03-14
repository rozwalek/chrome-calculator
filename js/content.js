'use strict';

document.addEventListener('DOMContentLoaded', function () {
    $('.calculator').blackCalculator({
        cssManual: true,
        allowKeyboard: true
    });

    $( "#blackCalculator" ).focus();
});