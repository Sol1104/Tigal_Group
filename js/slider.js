// JavaScript Document

/*
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slide-image");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left"); 
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
	let sliderSectionFirst = document.querySelectorAll(".slide-image")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all ease-in-out .7s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement ('beforeend', sliderSectionFirst);
		slider.style.marginLeft = "-100%";
	}, 1000);
}

btnRight.addEventListener('click', function(){
	Next();
});

function Prev() {
	let sliderSection = document.querySelectorAll(".slide-image");
	let sliderSectionLast = sliderSection[sliderSection.length -1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all ease-in-out .7s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterbegin', sliderSectionLast);
		slider.style.marginLeft = "-100%";
	}, 1000);
}

btnLeft.addEventListener('click', function(){
	Prev();
});

setInterval(function(){
	Next();
}, 5000);

*/