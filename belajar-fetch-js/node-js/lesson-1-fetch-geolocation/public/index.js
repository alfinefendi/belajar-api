if ('geolocation' in navigator) {
    const map = L.map('myHouse').setView([0, 0], 4);
    const marker = L.marker([0, 0]);
    const att = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    const url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(url, { attribution: att });
    tiles.addTo(map);
    marker.addTo(map);
  

    navigator.geolocation.getCurrentPosition(async position => {
        const {latitude,longitude} = position.coords;
        const {timestamp} = position.timestamp;
        document.getElementById('latitude').textContent = latitude;
        document.getElementById('longitude').textContent = longitude;
        
        map.setView([latitude,longitude],10);
        marker.setLatLng([latitude,longitude]);

        const data = {latitude,longitude};
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };  
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
    });


} else {
    console.log('not supported');
}
