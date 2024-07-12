let input = document.querySelector('.text__area__input');


function encrypt (input) {
    let output = input.value.trim();

    if (output == "" ){
        document.querySelector('.text__area__output__hide').style.display = 'none';
        document.querySelector('.text__area__output__show').style.display = 'block';
    } else {
        output = output.replace(/e/g, 'enter');
        output = output.replace(/i/g, 'imes');
        output = output.replace(/a/g, 'ai');
        output = output.replace(/o/g, 'ober');
        output = output.replace(/u/g, 'ufat');

        document.querySelector('.text__area__output__hide').style.display = 'block';
        document.querySelector('.text__area__output__show').style.display = 'none'; 
        document.querySelector('.text__area__output__hide__p').innerHTML = output;
        document.querySelector('.text__area__output__hide__button').innerHTML = 'Copy';
    }
}

function decrypt (input) {
    let output = input.value.trim();
    
    if (output == "") {
        document.querySelector('.text__area__output__hide').style.display = 'none';
        document.querySelector('.text__area__output__show').style.display = 'block';
    } else {
        output = output.replace(/enter/g, "e");
        output = output.replace(/imes/g, "i");
        output = output.replace(/ai/g, "a");
        output = output.replace(/ober/g, "o");
        output = output.replace(/ufat/g, "u");

        document.querySelector('.text__area__output__hide').style.display = 'block';
        document.querySelector('.text__area__output__show').style.display = 'none';
        document.querySelector('.text__area__output__hide__p').innerHTML = output;
        document.querySelector('.text__area__output__hide__button').innerHTML = 'Copy';
    }

    

}

function copy() {
    let copyText = document.querySelector('.text__area__output__hide__p').innerHTML;
    console.log(copyText);
    navigator.clipboard.writeText(copyText).then(function (){
        document.querySelector('.text__area__output__hide__button').innerHTML = 'Copied!';
    }).catch(function(err){
        console.error('Could not copy text', err);
    });
}

