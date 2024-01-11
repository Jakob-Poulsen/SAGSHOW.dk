var main_title = document.getElementById("årets-titel");
var header_title = document.getElementById("header_title");

console.log("script");

//*set date
var timeConstruct = function (param) {
	let date = new Date();
	if (param == "time") {
		return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	}
	if (param == "date") {
		return `${date.getUTCDate()}/${
			date.getUTCMonth() + 1
		} - ${date.getFullYear()}`;
	}
};
console.log(
	" connected...\n",
	timeConstruct("time") + " | " + timeConstruct("date")
);

//*Side-menu
var asideBoolean = 0;
function showMenu() {
	var btn = document.getElementById("sidemenu");
	if (asideBoolean == 0) {
		btn.classList.add("aside-show");
		asideBoolean = 1;
		return;
	}
	if (asideBoolean == 1) {
		btn.classList.remove("aside-show");
		asideBoolean = 0;
		return;
	}
}

//*footer-btn -->
function topButton() {
	var foot = document.querySelector("footer");
	foot.innerHTML += `
    <button class="top-btn" onclick="returnToTop()">
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
    </svg>
    </button>`;
}
topButton();
function returnToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

//? redirection --->
function home(site) {
	console.log(site);
	if (site === "..") window.location.assign("../../index.html ");
	if (site === ".") window.location.assign("./index.html ");
	if (site === "../shows") window.location.assign("../index.html ");
}

function åretsshow() {
	window.location.assign("./html/åretsshow.html ");
}

//*link til [årstal].html
function template(år, map) {
	console.log(år, map);
	if (map == "..")
		window.location.assign("../html/shows/tidligere" + år + ".html");
	else window.location.assign("./html/shows/tidligere" + år + ".html");
}

//?indsæt div tekst -->
header_title.innerHTML += ` <div class="after">${SAG_SHOW_ÅRSTAL}</div>`;

document.querySelector(".links").childNodes[11].innerHTML = "Køb billet!";
document.querySelector(".aside-content").childNodes[11].innerHTML =
	"Køb billet!";

document.querySelector(".special-button").href =
	"https://sag.safeticket.dk/95545/SAG-show_2024_Er_du_vaagen_?fbclid=IwAR1OxR1xcMx04U7gIMg3X5iKrip1dJ4JigPqQZ-9Uvhim_ge98eA7HsoYl8";
document.querySelector(".aside-content").childNodes[11].href =
	"https://sag.safeticket.dk/95545/SAG-show_2024_Er_du_vaagen_?fbclid=IwAR1OxR1xcMx04U7gIMg3X5iKrip1dJ4JigPqQZ-9Uvhim_ge98eA7HsoYl8";
