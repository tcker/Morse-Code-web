const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '\'': '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
    ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
};

const reverseMorseCodeMap = Object.fromEntries(Object.entries(morseCodeMap).map(([k, v]) => [v, k]));

function textToMorse(text) {
    let morseCode = [];
    for (let char of text.toUpperCase()) {
        if (char === ' ') {
            morseCode.push('/');
        } else {
            let morseChar = morseCodeMap[char];
            if (morseChar) {
                morseCode.push(morseChar);
            }
            morseCode.push(' '); 
        }
    }
    return morseCode.join('').trim(); 
}

function morseToText(morse) {
    let text = [];
    let morseWords = morse.trim().split('/'); 
    for (let morseWord of morseWords) {
        let morseChars = morseWord.trim().split(' '); 
        for (let morseChar of morseChars) {
            let char = reverseMorseCodeMap[morseChar];
            if (char) {
                text.push(char);
            }
        }
        text.push(' '); 
    }
    return text.join('').trim(); 
}


function myFunction() {
    const inputText = document.getElementById('input').value.trim();
    const output = document.getElementById('output');
    const isMorseCode = /^[.\-\/\s]+$/.test(inputText); 

    if (isMorseCode) {
        output.value = morseToText(inputText);
        playMorseCodeSound(inputText);
    } else {
        output.value = textToMorse(inputText);
    }
}

// Function to toggle lobby music
function toggleLobbyMusic() {
    const music = document.getElementById('lobbyMusic');
    const button = document.getElementById('toggleMusicButton');

    if (music.paused) {
        music.play();
        button.classList.remove('off');
        button.classList.add('on');
    } else {
        music.pause();
        button.classList.remove('on');
        button.classList.add('off');
    }
}


  window.onload = function() {
    var messages = [ "- . -..- - /- --- /-- --- .-. ... .", "Text to Morse Code | Morse Code to Text"];
    var rank = 0;
  
    // Code for Chrome, Safari and Opera
    document.getElementById("myTypewriter").addEventListener("webkitAnimationEnd", changeTxt);
  
    // Standard syntax
    document.getElementById("myTypewriter").addEventListener("animationend", changeTxt);
  
    function changeTxt(e) {
      var _h2 = this;
      _h2.style.animation = 'none';
      setTimeout(function() { 
        _h2.innerHTML = messages[rank];
        var speed = 6 * messages[rank].length / 100; 
        _h2.style.animation = 'typing ' + speed + 's steps(100, end), blink-caret .99s steps(1) forwards'; 
        (rank === messages.length - 1) ? rank = 0 : rank++; 
      }, 1000);
    }
};
