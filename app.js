const btnChangeColor = document.querySelector(".change-gradient");
const gradientName = document.querySelector(".gradient");
const container = document.querySelector(".container");

const HEX_ARR = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function randomHex() {
	const hex_color = [];
	for (let i = 0; i < 6; i++) {
		let item = Math.floor(Math.random() * HEX_ARR.length);
		hex_color.push(HEX_ARR[item]);
	}
	return hex_color.join("");
}

btnChangeColor.addEventListener("click", () => {
	const firstColor = randomHex();
	const secondColor = randomHex();
	container.style.background = `linear-gradient(to right, #${firstColor}, #${secondColor})`;
	btnChangeColor.style.background = `linear-gradient(to right, #${firstColor}, #${secondColor})`;
	gradientName.innerHTML = `background: linear-gradient(to right, #${firstColor}, #${secondColor});`;
});
