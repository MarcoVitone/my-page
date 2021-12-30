//DarkMode
let darkMode = localStorage.getItem('darkMode');

const dark = document.getElementById('checkbox');
const side = document.getElementById('side');
const navImg = document.getElementById('nav-img');
const cardBg = document.getElementsByClassName('img-front');


const enableDarkMode = () => {
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
    side.innerHTML = 'Benvenuto nel lato oscuro, esplora a fondo la vera forza!!';
    navImg.src = './img/profile-black.jpg';
    for(i=0; i < cardBg.length; i++) {
      cardBg[i].src = './img/sith-symbol.png';
    }

};

const disableDarkMode = () => {
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', null);
    side.innerHTML = 'Questo è il lato chiaro della forza attento a passare al lato oscuro!!';
    navImg.src = './img/profile.jpg';
    for(i=0; i < cardBg.length; i++) {
      cardBg[i].src = './img/jedi-symbol.png';
    }
};

if(darkMode === 'enabled') {
    enableDarkMode();
    dark.checked = true;
}

dark.addEventListener('change', () => {
    let darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    };
});

// Navbar scroll
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("dark-mode-toggle").style.top = "11vh";
  } else {
    document.getElementById("navbar").style.top = "-10vh";
    document.getElementById("dark-mode-toggle").style.top = "-11vh";
  }
  prevScrollpos = currentScrollPos;
}

//hamburger menu
let ham = localStorage.getItem('darkMode');

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const darkToggle = document.getElementById('dark-mode-toggle');

const openMenu = () => {
  console.log('open');
  localStorage.setItem('ham', 'open');
  menu.style.display = 'initial'; 
  darkToggle.style.display = 'initial';
};

const closeMenu = () => {
  console.log('close');
  localStorage.setItem('ham', null);
  menu.style.display = 'none'; 
  darkToggle.style.display = 'none';
}; 

hamburger.addEventListener('click', () => {
  let ham = localStorage.getItem('ham');
  if(ham !== 'open'){
    openMenu();
  } else{
    closeMenu();
  }
})
