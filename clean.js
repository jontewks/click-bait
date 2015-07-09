var cleanWords = [
  'weird trick',
  'odd trick',
  'will blow your mind',
  'you probably don\'t know',
  'you probably didn\'t know',
  'won\'t believe what happens next'
];

function checkPosts() {
  var divs = document.querySelectorAll('._4ikz:not(.click-bait-checked)');

  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.add('click-bait-checked');

    cleanWords.forEach(function(word) {
      if (divs[i].textContent.toLowerCase().indexOf(word) !== -1) {
        divs[i].style.display = 'none';
      }
    });
  }
};

setInterval(checkPosts, 1000);
