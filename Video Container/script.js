document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');
    const video = videoContainer.querySelector('video');

    videoContainer.addEventListener('mouseenter', () => {
        video.play();
    });

    videoContainer.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});
