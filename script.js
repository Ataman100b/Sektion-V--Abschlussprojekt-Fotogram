let images = [
    "./img/craiyon1.png",
    "./img/craiyon2.png",
    "./img/craiyon3.png",
    "./img/craiyon4.png",
    "./img/craiyon5.png",
    "./img/craiyon6.png",
    "./img/craiyon7.png",
    "./img/craiyon8.png",
    "./img/craiyon9.png",
    "./img/craiyon10.png",
    "./img/craiyon11.png",
    "./img/craiyon12.png",
];

let currentImageIndex = 0;

function renderImages() {
    document.getElementById("content").innerHTML = /*html*/ `
        ${images.map((image, i) => `
            <div id="door${i + 1}" 
                onclick="openImageOverlay(${i})" 
                class="doors" 
                style="background-image: url('${image}');">
            </div>
        `).join("")}
        <div id="overlay" class="overlay d_none" onclick="if(event.target === this) closeOverlay();">
            <div class="lightbox-container">
                <img id="large-image" src="" alt="Large image">
                <div class="nav-buttons">
                    <div class="nav-button left" onclick="navigateImage(-1)">←</div>
                    <div class="nav-button right" onclick="navigateImage(1)">→</div>
                </div>
                <div class="close-button" onclick="closeOverlay()">×</div>
            </div>
        </div>
    `;
}

function openImageOverlay(index) {
    currentImageIndex = index;
    document.getElementById('large-image').src = images[index];
    document.getElementById('overlay').classList.remove('d_none');
}

function closeOverlay() {
    document.getElementById('overlay').classList.add('d_none');
}

function navigateImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    document.getElementById('large-image').src = images[currentImageIndex];
    event.stopPropagation();
}

function openDoor(i) {
    document.getElementById(`door${i}`).style.backgroundImage = `url('${images[i - 1]}')`;
}

function toggleOverlay() {
    document.getElementById('overlay').classList.toggle('d_none');
}
