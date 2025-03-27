


let stop = {
    nr: 13,
    title: "Pancake rocks (Punakaiki)",
    lat: -42.114383,
    lon: 171.327320,
    zoom: 11,
};

// Karte initialisieren
let map = L.map('map').setView([stop.lat, stop.lon], stop.zoom);

//Hintergrundkarte definierten
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichne 
let marker = L.marker([stop.lat, stop.lon]).addTo(map);
marker.bindPopup(`
    <h2>${stop.title}</h2>
    <ul>
            <li>Geogr. Breite: ${stop.lat.toFixed(5)}°</li>
            <li>Geogr. Länge: ${stop.lon.toFixed(5)}°</li>
        </ul>
    `).openPopup();


