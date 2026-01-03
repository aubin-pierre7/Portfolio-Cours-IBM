function addRecommendation() {
    const text = document.getElementById("rec-text").value;

    if (text.trim() === "") {
        return;
    }

    const div = document.createElement("div");
    div.className = "recommendation";
    div.innerText = "“" + text + "”";

    document.getElementById("recommendation-list").appendChild(div);
    document.getElementById("rec-text").value = "";

    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
