let input = document.querySelector('.text__area__input');
let output_p = document.querySelector('.text__area__output__hide__p');


function encrypt (input) {
    let output = input.value.trim();

    if (output == "" ){
        document.querySelector('.text__area__output__hide').style.display = 'none';
        document.querySelector('.text__area__output__show').style.display = 'block';
        input.focus();
    } else {
        output = output.replace(/e/g, 'enter')
                        .replace(/i/g, 'imes')
                        .replace(/a/g, 'ai')
                        .replace(/o/g, 'ober')
                        .replace(/u/g, 'ufat');
        changeContent (output);
        
    }
}

function decrypt (input) {
    let output = input.value.trim();
    
    if (output == "") {
        document.querySelector('.text__area__output__hide').style.display = 'none';
        document.querySelector('.text__area__output__show').style.display = 'block';
        input.focus();
    } else {
        output = output.replace(/enter/g, "e")
                        .replace(/imes/g, "i")
                        .replace(/ai/g, "a")
                        .replace(/ober/g, "o")
                        .replace(/ufat/g, "u");
        changeContent (output);
    }
}

function clearInput() {
    input.value = '';
    document.querySelector('.text__area__output__hide').style.display = 'none';
    document.querySelector('.text__area__output__show').style.display = 'block';
    input.focus();
}

function copy() {
    let copyText = document.querySelector('.text__area__output__hide__p').innerHTML;
    navigator.clipboard.writeText(copyText).then(function (){
        document.querySelector('.text__area__output__hide__button').innerHTML = 'Copied!';
    }).catch(function(err){
        console.error('Could not copy text', err);
    });
}

function changeContent (output) {
    document.querySelector('.text__area__output__hide').style.display = 'block';
    document.querySelector('.text__area__output__show').style.display = 'none'; 
    document.querySelector('.text__area__output__hide__p').innerHTML = output;
    document.querySelector('.text__area__output__hide__button').innerHTML = 'Copy';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.querySelector('.icon-sun').style.display = isDarkMode ? 'none' : 'block';
    document.querySelector('.icon-moon').style.display = isDarkMode ? 'block' : 'none';
  }

