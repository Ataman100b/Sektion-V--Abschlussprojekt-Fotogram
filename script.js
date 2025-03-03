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

function renderImages() {
    for (let i = 1; i < images.length + 1; i++) {
        document.getElementById("content").innerHTML += /*html*/ `
            <div id="door${i}" 
            onclick="toggleOverlay(${i})" 
            class="doors" 
            style="background-image: url('${images[i - 1]}');"> 
        </div>
        `;
    }
}

function openDoor(i) {
    console.log(`Tür ${i} wurde geöffnet`);

    document.getElementById(
        `door${i}`
    ).style.backgroundImage = `url('${images[i - 1]}')`;
}



function toggleOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('d_none');
    }