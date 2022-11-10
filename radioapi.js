//Web Template By WinglessWhistle
console.log("Web Template By @WinglessWhistle");
const RadioAPI_URL = 'https://server1.wingless.cc:2087/api/live/nowplaying/winglessradio'; //replace with your station now playing url
async function getNowPlay() {
    const response = await fetch(RadioAPI_URL);
    const data = await response.json();
    //now playing
    document.getElementById('songthatisplaying').textContent = data.now_playing.song.text;
    console.log("now playing =" + data.now_playing.song.text);
    //up next
    document.getElementById('songupnext').textContent = data.playing_next.song.text;
    console.log("up next =" + data.playing_next.song.text);
    //live listeners
    document.getElementById('listencount').textContent = data.listeners.total;
    console.log("listener count =" + data.listeners.total);
    //dynamic page title
    document.title = data.now_playing.song.text + " | " + data.station.name;
}
   getNowPlay();
   setInterval(getNowPlay, 3250) //change to smaller number for more accurate song name or longer for less

