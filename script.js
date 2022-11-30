
const navLinkClick = () => {
  document.getElementById("toggleNav").addEventListener("click", () => {
    document.getElementById('toggle').checked = false;
  })
}

navLinkClick();


const readMore = () => {
  let btn = document.getElementById('readMoreBtn');
  let moreText = document.getElementById('text');
  let dots = document.getElementById('dots');

  btn.addEventListener('click', () => {
    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btn.innerHTML = 'Read More';
      moreText.style.display = 'none';

    } else {
      dots.style.display = 'none';
      btn.innerHTML = 'Read Less';
      moreText.style.display = 'inline'
    }
  })
}


readMore();

console.log()