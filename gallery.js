const beforeURL = `https://a0i4x4gc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'beforeAfter'%5D%7B%0A%20%20before%2C%0A%20%20%22imageUrl%22%3A%20before.asset-%3Eurl%2C%0A%20%0A%20%20%0A%20%20%0A%20%20%0A%7D`
const afterURL = `https://a0i4x4gc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'beforeAfter'%5D%7B%0A%20%20after%2C%0A%20%20%22imageUrl%22%3A%20after.asset-%3Eurl%2C%0A%20%0A%20%20%0A%20%20%0A%20%20%0A%7D`

fetch(beforeURL)
.then((res) => res.json())
.then(({ result })=> {
    const leftGrid = document.querySelector(".leftGrid")
    result.forEach(img => {
        const gridItemBefore = document.createElement("div")

        const beforeImg = document.createElement("img")
        
        gridItemBefore.appendChild(beforeImg)
        beforeImg.src = img.imageUrl
        leftGrid.appendChild(gridItemBefore)
        gridItemBefore.classList.add("class")
    })

})

fetch(afterURL)
.then((res) => res.json())
.then(({ result })=> {
    const rightGrid = document.querySelector(".rightGrid")
    result.forEach(img => {
        const gridItemAfter = document.createElement("div")

        const afterImg = document.createElement("img")
        
        gridItemAfter.appendChild(afterImg)
        afterImg.src = img.imageUrl
        rightGrid.appendChild(gridItemAfter)
        gridItemAfter.classList.add("class")

    })

})
