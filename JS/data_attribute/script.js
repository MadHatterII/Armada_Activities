const mainImage = document.getElementById("mainImage");
const toggleButton = document.getElementById("toggleButton");
const musicPlayer = document.getElementById("musicPlayer");
let isImage1 = true;

toggleButton.addEventListener("click", function() {
    if (isImage1) {
        mainImage.src = this.dataset.image2;
        musicPlayer.play();
        isImage1 = false;
    } else {
        mainImage.src = this.dataset.image1;
        musicPlayer.pause();
        musicPlayer.currentTime = 3; 
        isImage1 = true;
    }
});