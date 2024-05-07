

if ('geolocation' in navigator) {
 

    navigator.geolocation.getCurrentPosition(async position => {
        const {latitude,longitude} = position.coords;
        const {timestamp} = position.timestamp;
        document.getElementById('latitude').textContent = latitude;
        document.getElementById('longitude').textContent = longitude;



        const submitBtn = document.querySelector('.submit-btn');
        addEventListener('click', async ()=>{
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
        })
        
        
    });


} else {
    console.log('not supported');
}