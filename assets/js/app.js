function clickedMenu (className) {
    const BtnNavMob = document.querySelector(className);
    const menuMob = document.getElementById('navbarSupportedContent')
    BtnNavMob.onclick = () => menuMob.classList.toggle('show');
}

clickedMenu('.navbar-toggler');