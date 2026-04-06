function openPreview(btn){

let img = btn.parentElement.previousElementSibling.src;

document.getElementById("previewImg").src = img;

document.getElementById("previewBox").style.display = "flex";

}

function closePreview(){

document.getElementById("previewBox").style.display = "none";

}

