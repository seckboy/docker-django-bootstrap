function setRemoteElementWithLocalBackup(elementConfig) {
    let element=
        elementConfig.remote.match(/.*css$/) ? setLink(elementConfig.remote)
            : setScript(elementConfig.remote);
    element.onload =  elementConfig.testScript;
    element.onerror = elementConfig.testScript;
}

function setLink(linkTarget){
    console.log("setting link " + linkTarget);
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = linkTarget;
    document.head.appendChild(link);
    return link;
}

function setScript(scriptTarget){
    console.log("setting script " + scriptTarget);
    let script = document.createElement('script');
    script.src = scriptTarget;
    document.body.appendChild(script);
    return script;
}

