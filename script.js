var tl=gsap.timeline({
    scrollTrigger: {
        trigger: '.page2',
        start: '0% 95%',
        end: '50% 50%',
        scrub: true,
        // markers: true,
    }
})
tl.to(".fanta",{
    top:'150%',
    left:'25%'
},'same')
tl.to('.orangecut',{
    top:'150%',
    left:'30%'
},'same')
tl.to('.orange',{
    bottom:'-100%',
    left:'80%'
},'same')
tl.to('.leaf',{
    top:'100%',
    left:'70%',
    rotate:'-50deg'
}, 'same')
tl.to('.leaf2',{
    bottom:'-40%',
    left:'8%',
    rotate:'-200deg'
}, 'same')

var tl2=gsap.timeline({
    scrollTrigger: {
        trigger: '.page3',
        start: '0% 95%',
        end: '50% 50%',
        scrub: true,
        // markers: true,
    }
})

tl2.to('.fanta',{
    top:'238%',
    left:'50%'
},'b')
tl2.to('.orangecut',{
    top:'195%',
    left:'43%'
},'b')
tl2.from('.pepsiimg',{
    right:'-100%',
    top:'100%',
    rotate: '90deg'
},'b')
tl2.from('.cocaimg',{
    left:'-100%',
    top:'100%',
    rotate: '-90deg'
},'b')

document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:'top 50%',
        end:'bottom 50%',
        // markers:true,
        onEnter:function(){
            document.body.setAttribute("theme",e.dataset.color);
        },
        onEnterBack:function(){
            document.body.setAttribute("theme",e.dataset.color);

        }
    })
})