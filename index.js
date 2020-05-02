function submit() {
    const value = document.getElementById("password").value
    if (value === "hamster") {
        var img = document.createElement("img");
        img.src = "./hamster.jpg";
        var src = document.getElementById("img-container");
        src.appendChild(img);
    }
}