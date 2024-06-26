function setRemoteElementWithLocalBackup(elementConfig) {
    let element= setElement(elementConfig.remote);
    element.onload =  setTest(elementConfig);
    element.onerror = setTest(elementConfig);
}

function isCSSLink(destination){
    return destination.match(/.*css$/);
}

function setElement(destination) {
     if(isCSSLink(destination)){
         return setLink(destination);
     }else{
         return setScript(destination);
     }
}

 function setTest(elementConfig, testType){
    return function() {
        if (!elementConfig.testScript()) {
            setElement(elementConfig.local)
        }
    }
 }

function setLink(linkTarget){
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = linkTarget;
    document.head.appendChild(link);
    return link;
}

function setScript(scriptTarget){
    let script = document.createElement('script');
    script.src = scriptTarget;
    document.body.appendChild(script);
    return script;
}

