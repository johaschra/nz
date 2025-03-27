
let lat = -42.114383;
let lon = 171.327320;
let zoom = 11;

let stop = {
    nr: 7,
    title: "Tongariro Nationalpark",
    lat: lat,
    lon: lon,
    zoom: zoom,
};

// Karte initialisieren
let map = L.map('map').setView([lat, lon], zoom);

//Hintergrundkarte definierten
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichne 
let marker = L.marker([-42.114383, 171.327320]).addTo(map);
marker.bindPopup(`
    <h2>Pancake Rocks</h2>
    <ul>
            <li>Geogr. Breite: ${lat.toFixed(5)}</li>
            <li>Geogr. Länge: ${lon.toFixed(5)}</li>
        </ul>
    `).openPopup();


