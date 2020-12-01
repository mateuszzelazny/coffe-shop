document.addEventListener('scroll',()=>{
    const header = document.querySelector('header');
    header.querySelector('h1').style.transitionDuration="0.1s"
    if(window.scrollY>0){
        if(!header.classList.contains('scrollHeader')){
            header.classList.add('scrollHeader');
        }
    }else{
        if(header.classList.contains('scrollHeader')){
            header.classList.remove('scrollHeader');
        }
    }
})