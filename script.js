var title = document.getElementById("title");
var button = document.getElementById("btn");
var body = document.body;
var container = document.querySelector(".container");

button.addEventListener("click", function() {
    
    if (title.textContent === "LIGHT MODE") {
        title.textContent = "DARK MODE";
        body.style.backgroundColor = "#121212";
        body.style.color = "white";
        container.style.backgroundColor = "#1e1e1e";
        button.textContent = "Switch to Light";
        localStorage.setItem("mode", "dark");
        
        
    } else {
        title.textContent = "LIGHT MODE";
        body.style.backgroundColor = "#f5f5f5";
        body.style.color = "black";
        container.style.backgroundColor = "white";
        button.textContent = "Switch to Dark";
        localStorage.setItem("mode", "light");

    }
});

if (localStorage.getItem("mode") === "dark") {
    body.style.backgroundColor = "#121212";
    body.style.color = "white";
    container.style.backgroundColor = "#1e1e1e";
    title.textContent = "DARK MODE";
    button.textContent = "Switch to Light";
}



