//Web Template By WinglessWhistle
console.log("Web Template By @WinglessWhistle");
const RadioAPI_URL = 'https://radio.example.com/api/live/nowplaying/stationname'; //replace with your station now playing url
async function getNowPlay() {
    const response = await fetch(RadioAPI_URL);
    const data = await response.json();
    document.getElementById('songthatisplaying').textContent = data.now_playing.song.text;
    console.log(data.now_playing.song.text);
}
   getNowPlay();
   setInterval(getNowPlay, 3250) //change to smaller number for more accurate song name or longer for less
