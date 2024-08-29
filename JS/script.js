import {data, num} from "./data.js"

const toggleMenu = document.querySelector(".header__toggle-mobile-menu");
const navLinks = document.querySelector(".header__nav-links");
const headerImg = document.querySelector(".header__img-itself");
const infoHeader = document.querySelector(".header__card-info-header");
const infoPara = document.querySelector('.header__card-info-para');
const btnChange = document.querySelectorAll(".header__change-content-btn");



toggleMenu.addEventListener("click", ()=> {
	toggleMenu.classList.toggle("show-menu");

	navLinks.classList.toggle("menu-active")
})

window.addEventListener("resize", () => {
	if(window.innerWidth > 480) {
		navLinks.classList.remove("menu-active")
		toggleMenu.classList.remove("show-menu");
	}
})

let dataIndex = 0;

function handleheaderImg() {
	if(window.innerWidth >= 650) {
		headerImg.src = data.desktop[dataIndex].src;
		infoHeader.innerHTML = data.desktop[dataIndex].header;
		infoPara.innerHTML = data.desktop[dataIndex].info;

		dataIndex++
		if(dataIndex > 2) {
			dataIndex = 0
		}
		else if(dataIndex < 0) {
			dataIndex = 0
		};
	}
	else if(window.innerWidth < 650) {
		headerImg.src = data.mobile[dataIndex].src;
		infoHeader.innerHTML = data.mobile[dataIndex].header;
		infoPara.innerHTML = data.mobile[dataIndex].info;

		dataIndex++
		if(dataIndex > 2) {
			dataIndex = 0
		}
		else if(dataIndex < 0) {
			dataIndex = 0
		};
	}
}

function handleChange(e) {
	if(e.target.classList.contains("left")) {
		dataIndex - 1;
	}
	else {
		dataIndex + 1;
	};

	handleheaderImg();
}

btnChange.forEach(element => {
	element.addEventListener("click", (e) => {
		handleChange(e)
	})
});

