function getBootstrapMinConfig(staticDir) {
    let remoteLinkURL = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    let localLinkURL = staticDir + 'css/bootstrap.min.css';
    return {
        "remote": remoteLinkURL,
        "local": localLinkURL,
        "testScript": function () {
            return isBootstrapCSSLoaded();
        },
    };
}

function isBootstrapCSSLoaded(){
    let bootstrapTestDiv = document.createElement("div")
    bootstrapTestDiv.className = "hidden d-none";
    document.head.appendChild(bootstrapTestDiv);
    const divDisplay = window.getComputedStyle(bootstrapTestDiv).display;
    document.head.removeChild(bootstrapTestDiv);
    return divDisplay === "none";
}

function getBootstrapIconsConfig(staticDir){
    let remoteLinkURL = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css";
    let localLinkURL = staticDir + 'css/bootstrap-icons.css';
    return {
        "remote": remoteLinkURL,
        "local": localLinkURL,
        "testScript": function () {
            return isBootstrapIconsLoaded();
        },
    };
}

function isBootstrapIconsLoaded(){
    let iconsTestI = document.createElement("i")
    iconsTestI.className = "bi bi-x-lg";

    document.head.appendChild(iconsTestI);
    let myAscii = "";
    let iContent = window.getComputedStyle(iconsTestI,':before').content;
    for (let i = 1; i < iContent.length -1; i++) {
        myAscii += iContent.charCodeAt(i);
    }
    document.head.removeChild(iconsTestI);

    return Number(myAscii).toString(16) === 'f659';
}

function getBootstrapJSConfig(staticDir) {
    let remoteScriptURL = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
    let localScriptURL = staticDir + 'js/bootstrap.bundle.min.js';
    return {
        "remote": remoteScriptURL,
        "local": localScriptURL,
        "testScript": function () {
            return typeof(bootstrap) != 'undefined';
        },
    };
}

function getJQueryConfig(staticDir) {
    let remoteScriptURL = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js";
    let localScriptURL = staticDir + 'js/jquery.min.js';
    return {
        "remote": remoteScriptURL,
        "local": localScriptURL,
        "testScript": function () {
            return window.jQuery;
        },
    };
}
