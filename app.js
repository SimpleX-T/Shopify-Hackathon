"use strict";
const notificationBtn = document.querySelector(".notification");
const alertMenu = document.querySelector(".alert-menu");
const logo = document.querySelector(".logo");
const userMenu = document.querySelector(".user-menu");
const userBtn = document.querySelector(".username");
const planModal = document.querySelector(".plan");
const closePlan = document.querySelector("#closePlan");
const mainMenu = document.querySelector(".main-menu");
const closeMenu = document.querySelector("#closeMenu");
const menuItems = document.querySelectorAll(".menu-item");
const menuCheck = document.querySelectorAll(".check");
const progressCount = [];

menuCheck.forEach((check) => {
	let checked = false;
	check.addEventListener("click", () => {
		if (!checked) {
			setTimeout(() => {
				check.firstElementChild.setAttribute(
					"src",
					"https://crushingit.tech/hackathon-assets/icon-spinner.svg"
				);
			}, 300);
			check.firstElementChild.setAttribute(
				"src",
				"https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg"
			);
			check.setAttribute("aria-checked", true);
			checked = true;
		} else {
			setTimeout(() => {
				check.firstElementChild.setAttribute(
					"src",
					"https://crushingit.tech/hackathon-assets/icon-spinner.svg"
				);
			}, 300);
			check.firstElementChild.setAttribute(
				"src",
				"https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg"
			);
			check.setAttribute("aria-checked", true);
		}
		// console.log(check);
	});
});

menuItems.forEach((menuitem, _, menuitems) => {
	menuitem.addEventListener("click", () => {
		menuitems.forEach((item) => {
			item.classList.remove("item--active");
		});
		menuitem.classList.add("item--active");
	});
});

let openMenu = false;

closeMenu.addEventListener("click", function () {
	if (!openMenu) {
		document.querySelector(".menu").style.display = "block";
		closeMenu.querySelector("img").src =
			"https://crushingit.tech/hackathon-assets/icon-arrow-up.svg";
		openMenu = true;
	} else {
		document.querySelector(".menu").style.display = "none";
		closeMenu.querySelector("img").src =
			"https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";
		openMenu = false;
	}
});

function toggleModal(modal) {
	modal.classList.toggle("hidden");
}

notificationBtn.addEventListener("click", () => {
	toggleModal(alertMenu);
});

userBtn.addEventListener("click", () => {
	toggleModal(userMenu);
});

closePlan.addEventListener("click", () => {
	planModal.style.display = "none";
});
