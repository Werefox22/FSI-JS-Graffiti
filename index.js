let header = document.querySelector("#page-header")
header.style.textAlign = "right"

let dogImages = document.querySelectorAll(".dog-image")

for (let i = 0; i < dogImages.length; i++) 
{
	let radius = Math.random() * 100
	dogImages[i].style.borderRadius = radius + "px"
	let rotation = Math.random() * 360
	dogImages[i].style.transform = "rotate("+ rotation +"deg)"
}

let dogNames = document.querySelectorAll(".dog-name")

for (let i = 0; i < dogNames.length; i++) 
{
	dogNames[i].style.textAlign = "left"
}