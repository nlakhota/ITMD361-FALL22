function init() {
    function alertFunction() {
        var txt = document.getElementById("entryinput").value;
        alert("Nakibuddin Lakhota:" + txt);
        document.getElementById("textoutput").innerHTML = txt
    }
    var button = document.getElementById('entrybutton');
    button.addEventListener('click', alertFunction);

}
window.addEventListener('load', init);
