const button = document.getElementById("button");
const img = document.getElementById("img");
const cap = document.getElementById("caption")
let sceneNumber = 1;
button.addEventListener("click", function() {
    if (sceneNumber == 1) {
        img.src = "images/forest_path_2.jpg";
        cap.textContent = "you enter";
        sceneNumber++;
    } else if (sceneNumber == 2) {
        img.src = "images/forest_path_3.jpg";
        cap.textContent = "What a pretty place";
        sceneNumber++;
    }
});