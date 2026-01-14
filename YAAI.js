var audio = new Audio("Audio/YAAI.mp3");
audio.loop = true;
let $btn = document.querySelector("button");
let $imgs = document.querySelector(".img");
let black = `<img src="Images/Idiot-black.png" alt="YOU ARE AN IDIOT" /><img
					src="Images/Idiot-black.png"
					alt="YOU ARE AN IDIOT"
				/><img src="Images/Idiot-black.png" alt="YOU ARE AN IDIOT" />`;
let white = `<img src="Images/Idiot-white.png" alt="YOU ARE AN IDIOT" /><img
					src="Images/Idiot-white.png"
					alt="YOU ARE AN IDIOT"
				/><img src="Images/Idiot-white.png" alt="YOU ARE AN IDIOT" />`;
let boolean = true;

$btn.addEventListener("click", () => {
	audio.currentTime = 0;
	audio.play();
});

setInterval(() => {
	changeColor();
}, 326.1);

function changeColor() {
	if (boolean == true) {
		$imgs.innerHTML = black;

		document.documentElement.style.setProperty("--primary", "#000000");
		document.documentElement.style.setProperty("--secondary", "#ffffff");
		boolean = false;
	} else {
		$imgs.innerHTML = white;

		document.documentElement.style.setProperty("--primary", "#ffffff");
		document.documentElement.style.setProperty("--secondary", "#000000");
		boolean = true;
	}
}
