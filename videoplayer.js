window.onload = function() {
    const video = document.getElementById('myVideo');
    video.play();
};

// Optional: Handle full-screen behavior on user interaction
document.getElementById('myVideo').addEventListener('click', function() {
    if (this.requestFullscreen) {
        this.requestFullscreen();
    } else if (this.webkitRequestFullscreen) { // Safari support
        this.webkitRequestFullscreen();
    } else if (this.msRequestFullscreen) { // IE/Edge support
        this.msRequestFullscreen();
    }
});
