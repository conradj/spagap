var Main = (function () {

    function Main() {

    }

    Main.init = function () {
        //alert("Hello Worldsfdfd");
        document.getElementById("message").innerHTML = "Hello World";
        //navigator.notification.vibrate(1000);
        //navigator.notification.alert("Hello PG Worlds");
    }

    Main.vibrate = function () {
        alert("Vibrate for " + milliseconds.value + " milliseconds");
        navigator.notification.vibrate(milliseconds.value);
    }

    return Main;
}());
