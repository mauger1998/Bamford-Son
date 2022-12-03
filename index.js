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

const matchResult = window.matchMedia("(max-width: 1300px")

onresize = (event) => {
    hello()
}

function hello(){
    if (matchResult.matches == true) {
    console.log("true")
}
}
gsap.to(whyUs, {
    scrollTrigger: {
        trigger: ".why-us-titles",
        scrub:true,
        start:"top bottom",
        end:"+=800",
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
        end:"+=400",
    },
    x:0,
    opacity:1
})
gsap.to(".test-two", {
    scrollTrigger: {
        trigger: ".testimonial-cards",
        scrub:true,
        start:"top bottom",
        end:"+=500",
    },
    x:0,
    opacity:1
})
gsap.to(".test-one", {
    scrollTrigger: {
        trigger: ".testimonial-cards",
        scrub:true,
        start:"top bottom",
        end:"+=600",
    },
    x:0,
    opacity:1
})


/**************************/

const URL = `https://a0i4x4gc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'testimonial'%5D`


fetch(URL)
.then((res) => res.json())
.then(({ result })=> {
    const testimonialComments = Array.from(document.querySelectorAll(".comment"))
    console.log(result)
    result.forEach((result, index) => {
        testimonialComments[index].textContent = result.comment
    })

})



