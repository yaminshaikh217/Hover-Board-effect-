const main = document.querySelector(".main")

let circles = 450
colors = ["#E9A6A6", "#88E0EF", "#FF9300", "#2FDD92", "#C85C5C", "#E23E57"]


for (let i = 0; i < circles; i++) {

    const circle = document.createElement("div")
    circle.classList.add("circle")

    circle.addEventListener("mouseover", () => setColor(circle))
    circle.addEventListener("mouseout", () => removeColor(circle))
    main.appendChild(circle)

}


function setColor(element) {
    const getRandom = randomColor()
    element.style.background = getRandom
    element.style.boxShadow = ` 0px 2px 4px ${getRandom}`

}

function removeColor(element) {
    element.style.background = "#1d1d1d"
    element.style.boxShadow = ` 0px 2px 4px rgba(0,0,0,0.3)`


}



function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]

}