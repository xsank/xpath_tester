var request;

function check() {
    var rawHtml = document.getElementById("rawHtml").value;
    var xpathString = document.getElementById("xpathString").value;
    var form = new FormData();
    form.append("rawHtml", rawHtml);
    form.append("xpathString", xpathString);
    var url = "/check";
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("POST", url, false);
    request.onreadystatechange = callback;
    request.send(form);
}

function callback() {
    if (request.readyState == 4 && request.status == 200) {
        var response = request.responseText;
        setResult(response);
    }
}

function setResult(response) {
    var resHtml = document.getElementById("resHtml");
    resHtml.value = response
}