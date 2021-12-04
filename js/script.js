console.log('connected')

var asideBoolean = 0;
function showMenu() {
    var btn = document.getElementById('sidemenu');
    if (asideBoolean == 0) {
        btn.classList.add('aside-show');
        asideBoolean = 1;
        return
    };
    if (asideBoolean == 1) {
        btn.classList.remove('aside-show');
        asideBoolean = 0;
        return
    };
}

function home(site) {
    if (site == '..') window.location.assign('../../index.html ')
    else window.location.assign('../index.html ')
}

function åretsshow() {
    window.location.assign('./html/åretsshow.html ')
}

function template(år, map) {
    if (map == '..') window.location.assign('../html/shows/tidligere' + år + '.html')
    else window.location.assign('./html/shows/tidligere' + år + '.html')
}

function topButton() {
    var foot = document.querySelector('footer')
    foot.innerHTML += `
    <button class="top-btn" onclick="returnToTop()">
        <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
        </svg>
    </button>`;
}

topButton()

function returnToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;z
}

var main_title = document.getElementById('årets-titel')
var header_title = document.getElementById('header_title')

header_title.innerHTML += ` <div class="after">${SAG_SHOW_ÅRSTAL}</div>`;

document.querySelector('.links').childNodes[11].innerHTML = 'Billetter på vej!';
document.querySelector('.aside-content').childNodes[11].innerHTML = 'Billetter på vej!';