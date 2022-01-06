/**
 * Leaflet variable CDN
 */
declare var L: any;

declare var document: Document;

// date copyright
document.getElementById("nds-year").innerHTML= "" + new Date().getFullYear();

// leafletjs
var map = L.map('nds-map-contact', {
  center: [45.188953, 5.724911],
  zoom: 16,
  attributionControl:false
});

L.tileLayer('https://api.mapbox.com/styles/v1/{styleId}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '',
    maxZoom: 18,
    styleId: 'thomasnds/cky1g0bnd9yzb14nubr2a3pbe',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGhvbWFzbmRzIiwiYSI6ImNreTFmdmxkMTBiMnoydXBueThhbDV3NWoifQ.CPCm3H034JEVWDQthth7dA'
}).addTo(map);

// Konami
const keySequence: string[] = [];
const konamiCode = ['ArrowUp', 'ArrowUp',  'ArrowDown',  'ArrowDown',  'ArrowLeft',  'ArrowRight', 'ArrowLeft', 'ArrowRight',  'b',  'a'];
const konamiString = konamiCode.join('');

document.addEventListener('keydown', function(e) {
  // To make sure it freezes the scroll when 
  // the first two keypresses are "ArrowUp"
  if (keySequence[0] === 'ArrowUp' && keySequence[1] === 'ArrowUp' && e.key === 'ArrowDown') {
    e.preventDefault();
  }
});

document.addEventListener('keyup', function(e) {

    keySequence.push(e.key);
    keySequence.splice(-konamiCode.length - 1, keySequence.length - konamiCode.length);

    if (keySequence.join('').includes(konamiString)) {
      console.info("### KONAMI CODE ###");
      document.getElementById("nds-logo-img").style.transform = "rotate(90deg)";
      document.getElementById("nds-logo-img").style.background = "lightblue"
    }
});
