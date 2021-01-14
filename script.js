
const keySequence = [];
let konamiString = '';
const konamiCode = ['ArrowUp', 'ArrowUp',  'ArrowDown',  'ArrowDown',  'ArrowLeft',  'ArrowRight', 'ArrowLeft', 'ArrowRight',  'b',  'a'];

document.addEventListener('keydown', function(e) {
  // To make sure it freezes the scroll when 
  // the first two keypresses are "ArrowUp"
  if (keySequence[0] === 'ArrowUp' && keySequence[1] === 'ArrowUp' && e.key === 'ArrowDown') {
    e.preventDefault();
  }
});

document.addEventListener('keyup', function(e) {
  const doc = document.documentElement;

    keySequence.push(e.key);
    keySequence.splice(-konamiCode.length - 1, keySequence.length - konamiCode.length);
    konamiString = konamiCode.join('');

    if (keySequence.join('').includes(konamiString)) {
      logger.info("### KONAMI CODE ###");
      document.getElementById("nds-header-logo").style.transform = "rotate(90deg)";
      document.getElementById("nds-header-logo").style.background = "#CCC"
    }
  
});
