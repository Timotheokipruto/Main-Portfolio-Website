function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

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
