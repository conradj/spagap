var Main = (function () {

    function Main() {

    }

    Main.init = function () {
        //alert("Hello Worldsfdfd");
        document.getElementById("message").innerHtml("Hello World");
        navigator.notification.vibrate(1000);
        //navigator.notification.alert("Hello PG Worlds");
    }

    return Main;
}());
