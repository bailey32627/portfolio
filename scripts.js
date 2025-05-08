const aboutButton = document.getElementById( 'about-button' );
const projectButton = document.getElementById( 'project-button' );

const smMenuBtn = document.querySelector( '.sm-scr-nav-btn');
const smMenu = document.querySelector( '.sm-scr-menu' );
const smMenuClose = document.querySelector( ".sm-scr-menu-close" );

const smMenuLinks = document.querySelectorAll( '.sm-scr-menu-link');
const smHome = document.querySelector( '.sm-scr-menu-link-home' );
const smAbout = document.querySelector( '.sm-scr-menu-link-about' );
const smProjects = document.querySelector( '.sm-scr-menu-link-projects' );

projectButton.addEventListener( 'click', () => {
  location.href = 'index.html#projects';
});

aboutButton.addEventListener( 'click', () => {
  location.href = 'index.html#about';
});

smMenuBtn.addEventListener( 'click', () => {
  smMenu.style.transitionDelay = '0s';
  smMenu.classList.add( 'sm-scr-menu-active' );

  smHome.style.transitionDelay = '0.5s';
  smHome.style.transform = 'translateY(0)';
  smHome.style.opacity = '1';

  smAbout.style.transitionDelay = '0.8s';
  smAbout.style.transform = 'translateY(0)';
  smAbout.style.opacity = '1';

  smProjects.style.transitionDelay = '1.1s';
  smProjects.style.transform = 'translateY(0)';
  smProjects.style.opacity = '1';
});

smMenuLinks.forEach( (e) => {
  e.addEventListener( 'click', () => {
    smProjects.style.transitionDelay = '0.3s';
    smProjects.style.transform = 'translateY(50px)';
    smProjects.style.opacity = '0';

    smAbout.style.transitionDelay = '0.6s';
    smAbout.style.transform = 'translateY(50px)';
    smAbout.style.opacity = '0';

    smHome.style.transitionDelay = '0.9s';
    smHome.style.transform = 'translateY(50px)';
    smHome.style.opacity = '0';

    smMenu.style.transitionDelay = '1.2s';
    smMenu.classList.remove( 'sm-scr-menu-active' );

    setTimeout( () => {
      document.getElementById(e.name).scollIntoView()
    }, 1300)
  });
});

smMenuClose.addEventListener( 'click', () => {

  smProjects.style.transitionDelay = '0.3s';
  smProjects.style.transform = 'translateY(50px)';
  smProjects.style.opacity = '0';

  smAbout.style.transitionDelay = '0.6s';
  smAbout.style.transform = 'translateY(50px)';
  smAbout.style.opacity = '0';

  smHome.style.transitionDelay = '0.9s';
  smHome.style.transform = 'translateY(50px)';
  smHome.style.opacity = '0';

  smMenu.style.transitionDelay = '1.2s';
  smMenu.classList.remove( 'sm-scr-menu-active' );
});

const headerLogoContainer = document.querySelector( '.header-logo-container' );
headerLogoContainer.addEventListener( 'click', ()=> {
  location.href = 'index.html';
});
