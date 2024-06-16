    function getBackupBootstrapCSS(){
      var test = document.createElement("div")
      test.className = "hidden d-none"

      document.head.appendChild(test)
      var cssLoaded = window.getComputedStyle(test).display === "none"
      document.head.removeChild(test)

      if (!cssLoaded) {
          var link = document.createElement("link");

          link.type = "text/css";
          link.rel = "stylesheet";
          //link.href = "{% static 'css/bootstrap.min.css' %}";
          link.href = bootstrap_css;

          document.head.appendChild(link);
          alert("backup bs.css");
      }

    }

function getJQuery(){
	if(!window.jQuery){ document.write('<script src="' + jquery_js + '"><\/script>'); alert("backup jq");}
}

function getBackupBootstrapJS(){
	if(typeof(bootstrap) === 'undefined') {document.write('<script src="' + bootstrap_js + '"><\/script>');alert("backup bs.js");}
}
