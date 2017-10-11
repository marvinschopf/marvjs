function bodyColor(color) {}

function getAjax(url) {
    var request = new XMLHttpRequest();
    var resp = false;
    request.open("GET", url);
    request.addEventListener("load", function(event) {
        if (request.status != 200) {
            return false;
        } else {
            return request.responseText;
        }
    });
    request.send();
}

function setCookie(Bezeichner, Wert, Verfall) {
    var jetzt = new Date();
    var Auszeit = new Date(jetzt.getTime() + Verfall);
    document.cookie = Bezeichner + "=" + Wert + "; expires="+Auszeit.toGMTString() + ";";
}