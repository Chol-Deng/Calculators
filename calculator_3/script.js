document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('one').addEventListener('click', function() {
        document.forms.display.value += '1';
    });
    document.getElementById('two').addEventListener('click', function() {
        document.forms.display.value += '2';
    });
    document.getElementById('three').addEventListener('click', function() {
        document.forms.display.value += '3';
    });
    document.getElementById('four').addEventListener('click', function() {
        document.forms.display.value += '4';
    });
    document.getElementById('five').addEventListener('click', function() {
        document.forms.display.value += '5';
    });
    document.getElementById('six').addEventListener('click', function() {
        document.forms.display.value += '6';
    });
    document.getElementById('seven').addEventListener('click', function() {
        document.forms.display.value += '7';
    });
    document.getElementById('eight').addEventListener('click', function() {
        document.forms.display.value += '8';
    });
    document.getElementById('nine').addEventListener('click', function() {
        document.forms.display.value += '9';
    });
    document.getElementById('zero').addEventListener('click', function() {
        document.forms.display.value += '0';
    });
    document.getElementById('plus').addEventListener('click', function() {
        document.forms.display.value += '+';
    });
    document.getElementById('minus').addEventListener('click', function() {
        document.forms.display.value += '-';
    });
    document.getElementById('multiply').addEventListener('click', function() {
        document.forms.display.value += '*';
    });
    document.getElementById('divide').addEventListener('click', function() {
        document.forms.display.value += '/';
    });
    document.getElementById('clear').addEventListener('click', function() {
        document.forms.display.value = '';
    });
    document.getElementById('dot').addEventListener('click', function() {
        document.forms.display.value += '.';
    });
    document.getElementById('equal').addEventListener('click', function() {
        document.forms.display.value = eval(document.forms.display.value);
    });
});
