var Main = (function () {

    function Main() {

    }

    Main.init = function () {
        //alert("Hello Worldsfdfd");
        document.getElementById("message").innerHTML = "Hello Conrad";
        
        //navigator.notification.alert("Hello PG Worlds");
    }
    
    Main.vibrate = function(ms) {
        navigator.notification.vibrate(ms);
    }

    return Main;
}());
