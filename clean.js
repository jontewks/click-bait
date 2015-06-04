var cleanWords = [
  'weird trick',
  'odd trick',
  'will blow your mind',
  'you probably don\'t know',
  'you probably didn\'t know',
  'won\'t believe what happens next'
];

function checkPosts() {
  console.log('checking')
  var divs = document.querySelectorAll('._4-u2.mbm._5jmm._5pat:not(.click-bait-checked)');

  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.add('click-bait-checked');
    
    cleanWords.forEach(function(word) {
      if (divs[i].textContent.toLowerCase().indexOf(word) !== -1) {
        console.log(divs[i])
        divs[i].style.display = 'none';
      }
    });
  }
};

setInterval(checkPosts, 1000);
