let input = document.querySelector('.text__area__input');

function input_dissapear (input) {  
    input.value = ''; 
}

function encrypt (input) {
    let output = input.value; 

    output = output.replace(/e/g, 'enter');
    output = output.replace(/i/g, 'imes');
    output = output.replace(/a/g, 'ai');
    output = output.replace(/o/g, 'ober');
    output = output.replace(/u/g, 'ufat');
    console.log(output)

    document.querySelector('.text__area__output__hide').style.display = 'block';
    document.querySelector('.text__area__output__hide__p').innerHTML = output;

}

function decrypt (input) {
    let output = input.value; 

    output = output.replace(/enter/g, "e");
    output = output.replace(/imes/g, "i");
    output = output.replace(/ai/g, "a");
    output = output.replace(/ober/g, "o");
    output = output.replace(/ufat/g, "u");
    console.log(output)

    document.querySelector('.text__area__output__hide').style.display = 'block';
    document.querySelector('.text__area__output__hide__p').innerHTML = output;

}

