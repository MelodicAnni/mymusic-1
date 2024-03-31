"use strict";
const imgEl = document.getElementById("bg_img");
const imgCoverEl = document.getElementById("cover");
const musicTitleEl = document.getElementById("music_title");
const musicArtistEl = document.getElementById("musric_artist");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");
const songs = [
  {
    path: "song11.mp3",
    displayName: "Tum Hi Aana",
    cover: "anni.png",
    artist: "Jubin Nautiyal, Payal Dev",
  },
  {
    path: "song12.mp3",
    displayName: "Bol Na Halke Halke",
    cover: "anni2.jpg",
    artist: "Rahat Fateh Ali Khan",
  },
  {
    path: "song13.mp3",
    displayName: "Aram Ata Hai Deedar Se Tere",
    cover: "anni3.jpg",
    artist: "Azaan Sami Khan",
  },
  {
    path: "song14.mp3",
    displayName: "Banjaara",
    cover: "anni6.jpg",
    artist: "Mohammad Irfan",
  },
  {
    path: "song15.mp3",
    displayName: "Jitni Dafa",
    cover: "anni4.jpg",
    artist: "Yasser Desai, Rashmi Virag",
  },
  {
    path: "song16.mp3",
    displayName: "Milne Hai Mujhse Aayi",
    cover: "anni5.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song17.mp3",
    displayName: "Lo Safar",
    cover: "anni7.jpg",
    artist: "Jubin Nautiyal",
  },
  {
    path: "song18.mp3",
    displayName: "Bulleya",
    cover: "anni8.jpg",
    artist: "Amit Mishra",
  },
  {
    path: "song19.mp3",
    displayName: "Chand Sifarish",
    cover: "anni9.jpg",
    artist: "Kailash Kher, Shaan",
  },
  {
    path: "song20.mp3",
    displayName: "Uska Hi Banana",
    cover: "anni10.jpg",
    artist: "Arijit Singh",
  }, {
    path: "song21.mp3",
    displayName: "My Dil Goes Mmm",
    cover: "anni11.jpg",
    artist: "Gayatri Iyer, Shaan",
  },
  {
    path: "song22.mp3",
    displayName: "Baarish",
    cover: "anni12.jpg",
    artist: "Ash King, Shashaa Tirupati",
  },
  {
    path: "song23.mp3",
    displayName: "Ae Dil Hai Mushkil",
    cover: "anni13.jpg",
    artist: "Pritam and Arijit Singh",
  },
  {
    path: "song24.mp3",
    displayName: "Banke Hawa Mein",
    cover: "anni14.jpg",
    artist: "Altamash Faridi, Shivin, Jennifer",
  },
  {
    path: "song25.mp3",
    displayName: "Aapke Pyaar Mein",
    cover: "anni15.jpg",
    artist: "Alka Yagnik",
  },
  {
    path: "song26.mp3",
    displayName: "Dillagi",
    cover: "anni16.jpg",
    artist: "Rahat Fateh Ali Khan",
  },
  {
    path: "song27.mp3",
    displayName: "Ek Mulaqat",
    cover: "anni17.jpg",
    artist: "Jubin Nautiyal",
  },
  {
    path: "song28.mp3",
    displayName: "Mauka Milega To Hum",
    cover: "anni18.jpg",
    artist: "Alka Yagnik, Udit Narayan",
  },
  {
    path: "song29.mp3",
    displayName: "Main Dhoondne Ko Zamaane",
    cover: "anni19.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song30.mp3",
    displayName: "Tum Mere Ho",
    cover: "anni20.jpg",
    artist: "Jubin Nautiyal & Amrita Singh",
  },
  {
    path: "song31.mp3",
    displayName: "Kabhi Sham Dhale",
    cover: "anni21.jpg",
    artist: "Mahalakshmi Iyer",
  },
  {
    path: "song32.mp3",
    displayName: "Dil Lauta Do",
    cover: "anni22.jpg",
    artist: " Jubin Nautiyal, Payal Dev",
  },
  {
    path: "song33.mp3",
    displayName: "Main Jis Din Bhulaa Du",
    cover: "anni23.jpg",
    artist: "Jubin Nautiyal",
  },
  {
    path: "song34.mp3",
    displayName: "Meri Aashiqui",
    cover: "anni24.jpg",
    artist: "Jubin Nautiyal",
  },
  {
    path: "song35.mp3",
    displayName: "Bekhayali ",
    cover: "anni25.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song36.mp3",
    displayName: "Teri Masumiyat",
    cover: "anni26.jpg",
    artist: "Altamash Faridi",
  },
  {
    path: "song37.mp3",
    displayName: "Khairiyat",
    cover: "anni27.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song38.mp3",
    displayName: "Ye Hum Aa Gaye Hain Kahan",
    cover: "anni28.jpg",
    artist: "Lata Mangeshkar, Udit Narayan",
  },
  {
    path: "song39.mp3",
    displayName: "Zindagi",
    cover: "anni29.jpg",
    artist: "Jubin, NEELESH, Shankar",
  },
  {
    path: "song40.mp3",
    displayName: "Bol kaffara kya hoga",
    cover: "anni30.jpg",
    artist: "Sehar Gul Khan, Shehbaz Fayaz",
  }, {
    path: "song41.mp3",
    displayName: "Dekhte Dekhte",
    cover: "anni31.jpg",
    artist: "Atif Aslam",
  },
  {
    path: "song43.mp3",
    displayName: "Duaa",
    cover: "anni32.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song42.mp3",
    displayName: "Mile Ho Tum",
    cover: "anni33.jpg",
    artist: "Tony, Neha",
  },
  {
    path: "song44.mp3",
    displayName: "Haan Tu HAi",
    cover: "anni34.jpg",
    artist: "KK, Pritam Chakraborty",
  },
  {
    path: "song45.mp3",
    displayName: "Aaj Phir (Remix)",
    cover: "anni35.jpg",
    artist: "Arijit Singh, Samira Koppikar",
  },
  {
    path: "song46.mp3",
    displayName: "Hum Yaar Hai Tumhare",
    cover: "anni36.jpg",
    artist: "Alka Yagnik, Udit Narayan",
  },
  {
    path: "song47.mp3",
    displayName: "Ishq Mubarak ",
    cover: "anni37.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song48.mp3",
    displayName: "Is Qadar",
    cover: "anni38.jpg",
    artist: "Darshan, Tulsi, Sachet–Parampara",
  },
  {
    path: "song49.mp3",
    displayName: "Main Yahaan Hoon Yahaan",
    cover: "anni39.jpg",
    artist: "Udit Narayan",
  },
  {
    path: "song50.mp3",
    displayName: "Khuda Bhi",
    cover: "anni40.jpg",
    artist: "Mohit Chauhan",
  },
  
];
const music = new Audio();
let musicIndex = 0;
let isPlaying = false;
//================== Play Song  True or False====================
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}
//================== Play Music====================
function playMusic() {
  isPlaying = true;
  playvBtnEl.classList.replace("fa-play", "fa-pause");
  playvBtnEl.setAttribute("title", "pause");
  music.play();
}
//================== Pause Music====================
function pauseMusic() {
  isPlaying = false;
  playvBtnEl.classList.replace("fa-pause", "fa-play");
  playvBtnEl.setAttribute("pause", "title");
  music.pause();
}
//================== Load Songs ====================
function loadMusic(songs) {
  music.src = songs.path;
  musicTitleEl.textContent = songs.displayName;
  musicArtistEl.textContent = songs.artist;
  imgCoverEl.src = songs.cover;
  imgEl.src = songs.cover;
}
//================== Change Music ====================
function changeMusic(direction) {
  musicIndex = musicIndex + direction + (songs.length % songs.length);
  loadMusic(songs[musicIndex]);
  playMusic();
}
//================== Set Progress ====================
function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}
//================== Set Progress ====================
function updateProgressBar() {
  const { duration, currentTime } = music;
  const ProgressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${ProgressPercent}%`;
  const formattime = (timeRanges) =>
    String(Math.floor(timeRanges)).padStart(2, "0");
  durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
    duration % 60,
  )}`;
  currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
    currentTime % 60,
  )}`;
}
//================= Btn Events========================
const btnEvents = () => {
  playvBtnEl.addEventListener("click", togglePlay);
  nextvBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));
  //========= Progressbar===========================
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
};
//================= Btn Events========================
document.addEventListener("DOMContentLoaded", btnEvents);
//============ Calling Load Music
loadMusic(songs[musicIndex]);



