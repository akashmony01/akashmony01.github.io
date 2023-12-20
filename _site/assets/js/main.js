document.addEventListener("DOMContentLoaded", function () {
    const sectionHeading = document.getElementById('sectionHeading');
    const header = document.getElementById('header')
    const homeBody = document.getElementById('homeBody')
    const sections = document.querySelectorAll('section')
    const menuItems = document.querySelectorAll('.menuItem');

    window.addEventListener('scroll', function () {
        let currentSectionId = '';
        let showParam = window.innerHeight / 2;

        if(header && homeBody) {
            if (window.scrollY >= showParam) {
                header.classList.add('scrolled');
                homeBody.classList.add('scrolled');
            }else{
                header.classList.remove('scrolled');
                homeBody.classList.remove('scrolled');
            }
        }

        if(sectionHeading){
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if(rect.top <= showParam && rect.bottom >= showParam ){
                    currentSectionId = section.id;
                }
            });
            sectionHeading.innerHTML = currentSectionId;
        }

        
        if(menuItems && currentSectionId){
            menuItems.forEach(item => {
                let link = item.getAttribute('href');
                let idWithHash = '#'+currentSectionId
                let idWithSlashHash = '/#'+currentSectionId
                if( link == idWithHash || link == idWithSlashHash){
                    item.classList.add('active');
                }else{
                    item.classList.remove('active');
                }
            })
        }
    });
});