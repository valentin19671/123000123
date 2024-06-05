
function changeCss () {
    let navElement = document.querySelector(".left-nav-pc");
if (this.scrollY > 100){
    navElement.classList.remove('nav-anim-none');
    navElement.classList.add('nav-anim');
} else {
    navElement.classList.remove('nav-anim');
    navElement.classList.add('nav-anim-none');
}
  }

  window.addEventListener("scroll", changeCss , false);

let mainPC=document.querySelector('.main-pc');
let contactPC=document.querySelector('.contact-pc');
let projectsPC=document.querySelector('.projects-pc');
let uslugiPC=document.querySelector('.uslugi-pc');
let blogPC=document.querySelector('.blog-pc');
let comandaPC=document.querySelector('.comanda-pc');
let navPhoneArr=document.querySelectorAll('.nav-item-flex-svg');


let blogOpenArr=document.querySelectorAll('.blog-open');
let uslugiOpenArr=document.querySelectorAll('.span-uslugi');





uslugiOpenArr[0].addEventListener('click',()=>{
    if (!navArr[2].classList.contains('lnb-enable')){
        navArr[2].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='none';
        projectsPC.style.display='none';
        uslugiPC.style.display='block';
        comandaPC.style.display='none';
        blogPC.style.display='none';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
})

uslugiOpenArr[1].addEventListener('click',()=>{
    if (!navArr[2].classList.contains('lnb-enable')){
        navArr[2].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='none';
        projectsPC.style.display='none';
        uslugiPC.style.display='block';
        comandaPC.style.display='none';
        blogPC.style.display='none';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
})

uslugiOpenArr[2].addEventListener('click',()=>{
    if (!navArr[2].classList.contains('lnb-enable')){
        navArr[2].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='none';
        projectsPC.style.display='none';
        uslugiPC.style.display='block';
        comandaPC.style.display='none';
        blogPC.style.display='none';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
})

uslugiOpenArr[3].addEventListener('click',()=>{
    if (!navArr[2].classList.contains('lnb-enable')){
        navArr[2].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='none';
        projectsPC.style.display='none';
        uslugiPC.style.display='block';
        comandaPC.style.display='none';
        blogPC.style.display='none';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
})

uslugiOpenArr[4].addEventListener('click',()=>{
    if (!navArr[2].classList.contains('lnb-enable')){
        navArr[2].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='none';
        projectsPC.style.display='none';
        uslugiPC.style.display='block';
        comandaPC.style.display='none';
        blogPC.style.display='none';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
})







blogOpenArr[0].addEventListener('click',()=>{
    if (!navArr[4].classList.contains('lnb-enable')){
        navArr[4].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='none';
        projectsPC.style.display='none';
        uslugiPC.style.display='none';
        comandaPC.style.display='none';
        blogPC.style.display='block';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          popupUslugiArr[6].classList.toggle('keys-display-block');
    }
})

blogOpenArr[1].addEventListener('click',()=>{
    if (!navArr[4].classList.contains('lnb-enable')){
        navArr[4].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='none';
        projectsPC.style.display='none';
        uslugiPC.style.display='none';
        comandaPC.style.display='none';
        blogPC.style.display='block';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          popupUslugiArr[7].classList.toggle('keys-display-block');
    }
})


blogOpenArr[2].addEventListener('click',()=>{
    if (!navArr[4].classList.contains('lnb-enable')){
        navArr[4].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='none';
        projectsPC.style.display='none';
        uslugiPC.style.display='none';
        comandaPC.style.display='none';
        blogPC.style.display='block';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          popupUslugiArr[8].classList.toggle('keys-display-block');
    }
})










let navArr=document.querySelectorAll('.lnb');

navArr[0].addEventListener('click',()=>{
    if (!navArr[0].classList.contains('lnb-enable')){
        navArr[0].classList.add('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='block';
        contactPC.style.display='none';
        projectsPC.style.display='none';
        uslugiPC.style.display='none';
        comandaPC.style.display='none';
        blogPC.style.display='none';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
})

navArr[1].addEventListener('click',()=>{
    if (!navArr[1].classList.contains('lnb-enable')){
        navArr[1].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='none';
        projectsPC.style.display='block';
        uslugiPC.style.display='none';
        comandaPC.style.display='none';
        blogPC.style.display='none';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
})


navArr[2].addEventListener('click',()=>{
    if (!navArr[2].classList.contains('lnb-enable')){
        navArr[2].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='none';
        projectsPC.style.display='none';
        uslugiPC.style.display='block';
        comandaPC.style.display='none';
        blogPC.style.display='none';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
})

navArr[3].addEventListener('click',()=>{
    if (!navArr[3].classList.contains('lnb-enable')){
        navArr[3].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='none';
        projectsPC.style.display='none';
        uslugiPC.style.display='none';
        comandaPC.style.display='block';
        blogPC.style.display='none';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
})


navArr[4].addEventListener('click',()=>{
    if (!navArr[4].classList.contains('lnb-enable')){
        navArr[4].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='none';
        projectsPC.style.display='none';
        uslugiPC.style.display='none';
        comandaPC.style.display='none';
        blogPC.style.display='block';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
})


navArr[5].addEventListener('click',()=>{
    if (!navArr[5].classList.contains('lnb-enable')){
        navArr[5].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='block';
        projectsPC.style.display='none';
        uslugiPC.style.display='none';
        comandaPC.style.display='none';
        blogPC.style.display='none';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
})


navPhoneArr[0].addEventListener('click',()=>{
        mainPC.style.display='block';
        projectsPC.style.display='none';
        uslugiPC.style.display='none';
        comandaPC.style.display='none';
        contactPC.style.display='none';
        document.querySelector('.menu-items').classList.toggle('transform250');
    for (let line of document.querySelectorAll('.line')){
        line.classList.add('transform-none');
    }
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})

document.querySelector('.checkbox').addEventListener('click',()=>{
    document.querySelector('.menu-items').classList.remove('transform250');
    for (let line of document.querySelectorAll('.line')){
        line.classList.remove('transform-none');
    }
})

navPhoneArr[1].addEventListener('click',()=>{
    mainPC.style.display='none';
    projectsPC.style.display='block';
    uslugiPC.style.display='none';
    comandaPC.style.display='none';
    contactPC.style.display='none';
    document.querySelector('.menu-items').classList.toggle('transform250');
    for (let line of document.querySelectorAll('.line')){
        line.classList.add('transform-none');
    }
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})

navPhoneArr[2].addEventListener('click',()=>{
    mainPC.style.display='none';
    projectsPC.style.display='none';
    uslugiPC.style.display='block';
    comandaPC.style.display='none';
    contactPC.style.display='none';
    document.querySelector('.menu-items').classList.toggle('transform250');
    for (let line of document.querySelectorAll('.line')){
        line.classList.add('transform-none');
    }
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})

navPhoneArr[3].addEventListener('click',()=>{
    mainPC.style.display='none';
    projectsPC.style.display='none';
    uslugiPC.style.display='none';
    comandaPC.style.display='block';
    contactPC.style.display='none';
    document.querySelector('.menu-items').classList.toggle('transform250');
    for (let line of document.querySelectorAll('.line')){
        line.classList.add('transform-none');
    }
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})

navPhoneArr[4].addEventListener('click',()=>{
    mainPC.style.display='none';
    projectsPC.style.display='none';
    uslugiPC.style.display='none';
    comandaPC.style.display='none';
    blogPC.style.display='block';
    contactPC.style.display='none';
    document.querySelector('.menu-items').classList.toggle('transform250');
    for (let line of document.querySelectorAll('.line')){
        line.classList.add('transform-none');
    }
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})


navPhoneArr[5].addEventListener('click',()=>{
    mainPC.style.display='none';
    projectsPC.style.display='none';
    uslugiPC.style.display='none';
    comandaPC.style.display='none';
    blogPC.style.display='none';
    contactPC.style.display='block';
    document.querySelector('.menu-items').classList.toggle('transform250');
    for (let line of document.querySelectorAll('.line')){
        line.classList.add('transform-none');
    }
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})








let navBlockArr=document.querySelectorAll('.left-nav-block');

let p1HoverArr=document.querySelectorAll('.p1-hover');

navBlockArr[0].addEventListener('mouseover',()=>{
    p1HoverArr[0].style.opacity='1';
})

navBlockArr[0].addEventListener('mouseout',()=>{
    p1HoverArr[0].style.opacity='0';
})


navBlockArr[1].addEventListener('mouseover',()=>{
    p1HoverArr[1].style.opacity='1';
})

navBlockArr[1].addEventListener('mouseout',()=>{
    p1HoverArr[1].style.opacity='0';
})


navBlockArr[2].addEventListener('mouseover',()=>{
    p1HoverArr[2].style.opacity='1';
})

navBlockArr[2].addEventListener('mouseout',()=>{
    p1HoverArr[2].style.opacity='0';
})


navBlockArr[3].addEventListener('mouseover',()=>{
    p1HoverArr[3].style.opacity='1';
})

navBlockArr[3].addEventListener('mouseout',()=>{
    p1HoverArr[3].style.opacity='0';
})


navBlockArr[4].addEventListener('mouseover',()=>{
    p1HoverArr[4].style.opacity='1';
})

navBlockArr[4].addEventListener('mouseout',()=>{
    p1HoverArr[4].style.opacity='0';
})

navBlockArr[5].addEventListener('mouseover',()=>{
    p1HoverArr[5].style.opacity='1';
})

navBlockArr[5].addEventListener('mouseout',()=>{
    p1HoverArr[5].style.opacity='0';
})




let popupKeysArr=document.querySelectorAll('.block-popup-filter');
let buttonKeysOpenArr=document.querySelectorAll('.button-oznakomitsya');


buttonKeysOpenArr[0].addEventListener('click',()=>{
    popupKeysArr[0].classList.toggle('keys-display-block');
})

popupKeysArr[0].addEventListener('click',()=>{
    popupKeysArr[0].classList.toggle('keys-display-block');
})


buttonKeysOpenArr[1].addEventListener('click',()=>{
    popupKeysArr[1].classList.toggle('keys-display-block');
})

popupKeysArr[1].addEventListener('click',()=>{
    popupKeysArr[1].classList.toggle('keys-display-block');
})



buttonKeysOpenArr[2].addEventListener('click',()=>{
    popupKeysArr[2].classList.toggle('keys-display-block');
})

popupKeysArr[2].addEventListener('click',()=>{
    popupKeysArr[2].classList.toggle('keys-display-block');
})



buttonKeysOpenArr[3].addEventListener('click',()=>{
    popupKeysArr[3].classList.toggle('keys-display-block');
})

popupKeysArr[3].addEventListener('click',()=>{
    popupKeysArr[3].classList.toggle('keys-display-block');
})



buttonKeysOpenArr[4].addEventListener('click',()=>{
    popupKeysArr[4].classList.toggle('keys-display-block');
})

popupKeysArr[4].addEventListener('click',()=>{
    popupKeysArr[4].classList.toggle('keys-display-block');
})





let popupUslugiArr=document.querySelectorAll('.block-popup-uslugi');
let blockUslugiArr=document.querySelectorAll('.uslugi-block-flex1');
let blockUslugi1Arr=document.querySelectorAll('.uslugi-block-flex');



blockUslugiArr[0].addEventListener('click',()=>{
    popupUslugiArr[0].classList.toggle('keys-display-block');
})

popupUslugiArr[0].addEventListener('click',()=>{
    popupUslugiArr[0].classList.toggle('keys-display-block');
})



blockUslugiArr[1].addEventListener('click',()=>{
    popupUslugiArr[1].classList.toggle('keys-display-block');
})

popupUslugiArr[1].addEventListener('click',()=>{
    popupUslugiArr[1].classList.toggle('keys-display-block');
})


blockUslugiArr[2].addEventListener('click',()=>{
    popupUslugiArr[2].classList.toggle('keys-display-block');
})

popupUslugiArr[2].addEventListener('click',()=>{
    popupUslugiArr[2].classList.toggle('keys-display-block');
})


blockUslugiArr[3].addEventListener('click',()=>{
    popupUslugiArr[3].classList.toggle('keys-display-block');
})

popupUslugiArr[3].addEventListener('click',()=>{
    popupUslugiArr[3].classList.toggle('keys-display-block');
})



blockUslugiArr[4].addEventListener('click',()=>{
    popupUslugiArr[4].classList.toggle('keys-display-block');
})

popupUslugiArr[4].addEventListener('click',()=>{
    popupUslugiArr[4].classList.toggle('keys-display-block');
})


blockUslugiArr[5].addEventListener('click',()=>{
    popupUslugiArr[5].classList.toggle('keys-display-block');
})

popupUslugiArr[5].addEventListener('click',()=>{
    popupUslugiArr[5].classList.toggle('keys-display-block');
})






blockUslugi1Arr[0].addEventListener('click',()=>{
    popupUslugiArr[6].classList.toggle('keys-display-block');
})

popupUslugiArr[6].addEventListener('click',()=>{
    popupUslugiArr[6].classList.toggle('keys-display-block');
})

blockUslugi1Arr[1].addEventListener('click',()=>{
    popupUslugiArr[7].classList.toggle('keys-display-block');
})

popupUslugiArr[7].addEventListener('click',()=>{
    popupUslugiArr[7].classList.toggle('keys-display-block');
})


blockUslugi1Arr[2].addEventListener('click',()=>{
    popupUslugiArr[8].classList.toggle('keys-display-block');
})

popupUslugiArr[8].addEventListener('click',()=>{
    popupUslugiArr[8].classList.toggle('keys-display-block');
})
