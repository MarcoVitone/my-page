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
    document.getElementById('label').style.backgroundColor = 'rgb(255, 222, 6)';
    document.getElementById('label').style.transform = 'translateX(24px)';
    document.getElementById('label').style.transform = 'scale(1.3)';
    document.getElementById('ball').style.transform = 'translateX(24px)';
};

const disableDarkMode = () => {
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', null);
    side.innerHTML = 'Questo è il lato chiaro della forza attento a passare al lato oscuro!!';
    navImg.src = './img/profile.jpg';
    for(i=0; i < cardBg.length; i++) {
      cardBg[i].src = './img/jedi-symbol.png';
    }
    document.getElementById('label').style.backgroundColor = '#111';
    document.getElementById('label').style.transform = 'translateX(0)';
    document.getElementById('label').style.transform = 'scale(1.3)';
    document.getElementById('ball').style.transform = 'translateX(0)';
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
  } else {
    document.getElementById("navbar").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
}

//hamburger menu
let ham = localStorage.getItem('ham');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

const openMenu = () => {
  localStorage.setItem('ham', 'open');
  menu.style.display = 'initial'; 
};

const closeMenu = () => {
  document.body.style.width = '100vw';
  localStorage.setItem('ham', null);
  menu.style.display = 'none'; 
}; 

hamburger.addEventListener('click', () => {
  let ham = localStorage.getItem('ham');
  if(ham !== 'open'){
    openMenu();
  } else{
    closeMenu();
  }
});


