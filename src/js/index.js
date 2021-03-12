const PHP_BASE = 'src/php/';

$(function() {

    let map = L.map('map').setView([37.8387, -5.2215], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let icon = L.icon({
        iconUrl: './src/imgs/icon.png',
        iconSize: [65, 65],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });

    $.get(`${PHP_BASE}getEarthquakes.php`, function(data) {

        data.forEach(({ title, link, date, time, magnitude, lat, long }) => {

            L.marker([lat, long], { icon: icon }).addTo(map)
                .bindPopup(`<p>${date} ${time} <br> <a href="${link}" target="_blank">${title}</a> (magnitud ${magnitude})</p>`)
                .openPopup();
        });


    });


})