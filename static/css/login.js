document.getElementById("show-signup").addEventListener("click", function () {
    document.getElementById("login-page").classList.add("hidden");

    setTimeout(function () {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("signup-page").style.display = "block";
        document.getElementById("signup-page").classList.remove("hidden");
    }, 500);
});
document.getElementById("show-login").addEventListener("click", function () {
    document.getElementById("signup-page").classList.add("hidden");

    setTimeout(function () {
        document.getElementById("signup-page").style.display = "none";
        document.getElementById("login-page").style.display = "block";
        document.getElementById("login-page").classList.remove("hidden");
    }, 500);
});