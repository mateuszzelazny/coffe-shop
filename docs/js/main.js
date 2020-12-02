let lists = document.querySelectorAll('.productList>ul');
lists.forEach((element)=>{
    element.addEventListener('wheel',(e)=>{
        let list = element.querySelector('ul');
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if(!(element.scrollLeft+element.clientWidth == element.scrollWidth && delta<0)^(element.scrollLeft == 0 && delta>0))
        {
            // console.log('l')
            element.scrollLeft-=delta*60;
            e.preventDefault();
        }
    })
})

document.addEventListener('scroll',(event,delta)=>{
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
});

    // i=0;
    // string=``;
    //     console.log("region"+i)
    //     list.querySelectorAll(".product").forEach((product)=>{
    //         string+=`{\nname:"${product.querySelector(".title").innerHTML.replace('\n','').trim()}",\nprice:"${product.querySelector(".price").innerHTML.replace('\n','').trim()}",\nregion:${i}\n},`;
    //     })
    //     i++;
    // })
    // console.log(string)