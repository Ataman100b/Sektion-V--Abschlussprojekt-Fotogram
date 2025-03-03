let images = [
  "./img/cst1.bmp",
  "./img/cst2.bmp",
  "./img/cst3.bmp",
  "./img/cst4.bmp",
  "./img/cst5.bmp",
  "./img/cst6.bmp",
  "./img/cst7.bmp",
  "./img/cst8.bmp",
  "./img/cst9.bmp",
  "./img/cst10.bmp",
  "./img/cst11.bmp",
  "./img/cst12.bmp",
  "./img/cst13.bmp",
  "./img/cst14.bmp",
  "./img/cst15.bmp",
  "./img/cst16.bmp",
  "./img/cst17.bmp",
  "./img/cst18.bmp",
  "./img/cst19.bmp",
  "./img/cst20.bmp",
  "./img/cst21.bmp",
  "./img/cst22.bmp",
  "./img/cst23.bmp",
  "./img/cst24.bmp",
];

function renderDoors() {
  for (let i = 0; i < images.length; i++) {
    document.getElementById("content").innerHTML += /*html*/ `
            <div id="door${i + 1}" 
            onclick="openDoor(${i + 1})" 
            class="doors"> ${i + 1} 
        </div>
        `;
  }
}

function openDoor(i) {
  console.log(`Tür ${i} wurde geöffnet`);

  document.getElementById(
    `door${i}`
  ).style.backgroundImage = `url('./img/cst${i}.bmp')`;
}
