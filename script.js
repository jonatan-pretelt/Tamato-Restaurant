document.addEventListener('DOMContentLoaded', function () {
    var backdrop = document.querySelector(".backdrop");
    var menuBtn = document.querySelector(".main-menu__menu-btn");
    var menuModal = document.querySelector('.menu-modal');
    var aboutBtn = document.querySelector('.main-menu__about-btn');
    var aboutSection = document.getElementById('about');

    menuBtn.addEventListener('click',
        function () {
            backdrop.style.display = 'block';
            menuModal.style.display = 'block';
        }
    );

    aboutBtn.addEventListener('click',
        function(){
            
            var currentItems = document.querySelectorAll('.current');
            for (var i = 0; i < currentItems.length; i++) {
                currentItems[i].classList.remove('current');
                aboutBtn.classList.add('current');
            }
            
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    );

    backdrop.addEventListener('click',
        function () {
            backdrop.style.display = 'none';
            menuModal.style.display = 'none';
        }
    );


});










