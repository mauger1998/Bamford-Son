const form = document.querySelector(".scroll")
const contactButtons = Array.from(document.querySelectorAll(".contactButton"))
const workButton = document.querySelector(".workButton")
const workSection = document.querySelector(".image-gallery")

contactButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        form.scrollIntoView()
    })
    
})

workButton.addEventListener("click", (e) => {
    workSection.scrollIntoView()
})


