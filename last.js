// Select elements
const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const songTitle = document.getElementById("songTitle");
const artistName = document.getElementById("artistName");
const albumArt = document.getElementById("albumArt");

// Sample playlist
const playlist = [
  {
    title: "Song 1",
    artist: "Artist 1",
    src: "song1.mp3",
    albumArt: "album-cover1.jpg"
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    src: "song2.mp3",
    albumArt: "album-cover2.jpg"
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    src: "song3.mp3",
    albumArt: "album-cover3.jpg"
  }
];

let currentSongIndex = 0;

// Load song details
function loadSong(index) {
  const song = playlist[index];
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  albumArt.src = song.albumArt;
  audioPlayer.src = song.src;
}

// Play/Pause function
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "⏸️";  // Change button to pause icon
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "⏯️";  // Change button to play icon
  }
}

// Next Song
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadSong(currentSongIndex);
  audioPlayer.play();
  playPauseBtn.textContent = "⏸️";
}

// Previous Song
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentSongIndex);
  audioPlayer.play();
  playPauseBtn.textContent = "⏸️";
}

// Event Listeners
playPauseBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Load the first song on page load
window.onload = () => {
  loadSong(currentSongIndex);
};
