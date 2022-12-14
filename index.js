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

gsap.to(".test-three", {
    scrollTrigger: {
        trigger: ".test-three",
        scrub:true,
        start:"top bottom",
        end:"+=200",
    },
    x:0,
    opacity:1
})
gsap.to(".test-two", {
    scrollTrigger: {
        trigger: ".test-two",
        scrub:true,
        start:"top bottom",
        end:"+=350",
    },
    x:0,
    opacity:1
})
gsap.to(".test-one", {
    scrollTrigger: {
        trigger: ".test-one",
        scrub:true,
        start:"top bottom",
        end:"+=500",
    },
    x:0,
    opacity:1
})
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



    // gsap.to(".test-three", {
    //     scrollTrigger: {
    //         trigger: ".testimonial-cards",
    //         scrub:true,
    //         start:"top bottom",
    //         end:"+=400",
    //     },
    //     x:0,
    //     opacity:1
    // })
    // gsap.to(".test-two", {
    //     scrollTrigger: {
    //         trigger: ".testimonial-cards",
    //         scrub:true,
    //         start:"top bottom",
    //         end:"+=500",
    //     },
    //     x:0,
    //     opacity:1
    // })
    // gsap.to(".test-one", {
    //     scrollTrigger: {
    //         trigger: ".testimonial-cards",
    //         scrub:true,
    //         start:"top bottom",
    //         end:"+=600",
    //     },
    //     x:0,
    //     opacity:1
    // })
    






/**************************/

const URL = `https://a0i4x4gc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'testimonial'%5D`


fetch(URL)
.then((res) => res.json())
.then(({ result })=> {
    const testimonialComments = Array.from(document.querySelectorAll(".comment"))
    const testimonialName = Array.from(document.querySelectorAll(".firstName"))
    console.log(result)
    result.forEach((result, index) => {
        testimonialComments[index].textContent = result.comment
        testimonialName[index].textContent = result.name
    })

})


/*****************************/
const burger = document.querySelector(".burger")
const dropDown = document.querySelector(".dropDown")

burger.addEventListener("click", (e) => {
    dropDown.classList.toggle("dropDownAdd")
})


