const form = document.querySelector(".scroll")
const contactButtons = Array.from(document.querySelectorAll(".contactButton"))
const workButton = document.querySelector(".workButton")
const workSection = document.querySelector(".image-gallery")
const whyUs = document.querySelector(".why-us-icons")

gsap.registerPlugin(ScrollTrigger)

contactButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        form.scrollIntoView()
    })
    
})

workButton.addEventListener("click", (e) => {
    workSection.scrollIntoView()
})

gsap.to(whyUs, {
    scrollTrigger: {
        trigger: ".why-us-titles",
        scrub:true,
        start:"top bottom",
        end:"+=1000",
    },
    y:0,
    opacity:1
})
gsap.to(".gallery-one", {
    scrollTrigger: {
        trigger: ".image-gallery",
        scrub: true,
        start:"top bottom",
        end: "+=500",
    },
    x:0,
    opacity:1,
    
    
})
gsap.to(".gallery-two", {
    scrollTrigger: {
        trigger: ".gallery-one",
        scrub: true,
        start:"bottom bottom",
        end: "+=500",
    },
    x:0,
    opacity:1,
    
})
gsap.to(".gallery-three", {
    scrollTrigger: {
        trigger: ".gallery-one",
        scrub: true,
        start:"top bottom",
        end: "+=500",
    },
    y:0,
    opacity:1,
    
})
gsap.to(".gallery-four", {
    scrollTrigger: {
        trigger: ".gallery-one",
        scrub:true,
        start:"bottom bottom",
        end:"+=500",
    },
    y:0,
    opacity:1
})
gsap.to(".gallery-five", {
    scrollTrigger: {
        trigger: ".gallery-four",
        scrub:true,
        start:"top bottom",
        end:"+=800",
    },
    y:0,
    opacity:1
})
gsap.to(".gallery-six", {
    scrollTrigger: {
        trigger: ".gallery-one",
        scrub:true,
        start:"top bottom",
        end:"+=500",
    },
    x:0,
    opacity:1
})
gsap.to(".gallery-seven", {
    scrollTrigger: {
        trigger: ".gallery-six",
        scrub:true,
        start:"bottom bottom",
        end:"+=500",
    },
    x:0,
    opacity:1
})
gsap.to(".test-three", {
    scrollTrigger: {
        trigger: ".testimonial-cards",
        scrub:true,
        start:"top bottom",
        end:"+=500",
    },
    x:0,
    opacity:1
})
gsap.to(".test-two", {
    scrollTrigger: {
        trigger: ".testimonial-cards",
        scrub:true,
        start:"top bottom",
        end:"+=650",
    },
    x:0,
    opacity:1
})
gsap.to(".test-one", {
    scrollTrigger: {
        trigger: ".testimonial-cards",
        scrub:true,
        start:"top bottom",
        end:"+=750",
    },
    x:0,
    opacity:1
})



