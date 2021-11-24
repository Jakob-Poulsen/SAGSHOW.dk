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

function template(år) {
    window.location.assign('./html/shows/tidligere' + år + '.html')
}