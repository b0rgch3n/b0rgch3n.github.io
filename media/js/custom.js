
function loadScript(url, thisid, lastid) {
    var last = document.getElementById(lastid);
    var scrn = document.createElement('script');
    scrn.src = url;
    scrn.id = thisid;
    scrn.async = true;
    last.parentNode.insertBefore(scrn, last);
}

function loadStyle(href, thisid, lastid) {
    var last = document.getElementById(lastid);
    var styn = document.createElement('link');
    styn.id = thisid;
    styn.rel = "stylesheet";
    styn.href = href;
    last.parentNode.insertBefore(styn, last);
}


console.log("The custom javascript code has been loaded (๑˙ᴗ˙๑)");
