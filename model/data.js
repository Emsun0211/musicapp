const songs = [
	{
		id: 1,
		title: "19th Floor",
		artist: "Bobby Richards",
		artwork: require("../assets/img1.jpg"),
		url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2F19th%20Floor%20-%20Bobby%20Richards.mp3?alt=media&token=4fe09d01-c064-440e-9fa7-e02005ebd79f",
	},
	{
		id: 2,
		title: "Awful",
		artist: "josh pan",
		artwork: require("../assets/img2.jpg"),
		url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FAwful%20-%20josh%20pan.mp3?alt=media&token=5b174d4c-be09-417c-9fb8-b384f3ce0ec2",
	},
	{
		id: 3,
		title: "Something is Going On",
		artist: "Godmode",
		artwork: require("../assets/img3.jpg"),
		// url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FSomething%20is%20Going%20On%20-%20Godmode.mp3?alt=media&token=ecf0d5c5-bc93-48c3-9046-077638d12cfd",
		url: "https://firebasestorage.googleapis.com/v0/b/jewels-2b73a.appspot.com/o/track3.mp3?alt=media&token=e3e04fbe-8461-41d2-8b85-3d8181613755&_gl=1*12gltkg*_ga*MTc0MDAwMjA5OC4xNjc1NDU5MjQ2*_ga_CW55HF8NVT*MTY4NTg4MzA0My4xNi4xLjE2ODU4ODM3NzkuMC4wLjA.",
	},
	{
		id: 4,
		title: "Book The Rental Wit It",
		artist: "RAGE",
		artwork: require("../assets/img4.jpg"),
		url: "https://firebasestorage.googleapis.com/v0/b/jewels-2b73a.appspot.com/o/track2.mp3?alt=media&token=f34604cc-552b-4553-b2eb-4f9239160f8b&_gl=1*tx9di0*_ga*MTc0MDAwMjA5OC4xNjc1NDU5MjQ2*_ga_CW55HF8NVT*MTY4NTg4MzA0My4xNi4xLjE2ODU4ODM3NTEuMC4wLjA.",
		// url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FBook%20The%20Rental%20Wit%20It%20-%20RAGE.mp3?alt=media&token=6f76a691-fd9c-4057-ac0a-0e39104e865e",
	},
	{
		id: 5,
		title: "Crimson Fly",
		artist: "Huma-Huma",
		artwork: require("../assets/img5.jpg"),
		// url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FCrimson%20Fly%20-%20Huma-Huma.mp3?alt=media&token=b2d30b27-286e-4d7d-82ad-1bdfa76a4058",
		// url: "https://firebasestorage.googleapis.com/v0/b/jewels-2b73a.appspot.com/o/track1.mp3?alt=media&token=51156387-1dee-409f-99f9-236dc1ab25f3&_gl=1*14oidw9*_ga*MTc0MDAwMjA5OC4xNjc1NDU5MjQ2*_ga_CW55HF8NVT*MTY4NTg4MzA0My4xNi4xLjE2ODU4ODM1ODYuMC4wLjA.",
		url: "https://firebasestorage.googleapis.com/v0/b/jewels-2b73a.appspot.com/o/track1.mp3?alt=media&token=51156387-1dee-409f-99f9-236dc1ab25f3&_gl=1*grmlzm*_ga*MTc0MDAwMjA5OC4xNjc1NDU5MjQ2*_ga_CW55HF8NVT*MTY4NTg4MzA0My4xNi4xLjE2ODU4ODM1OTEuMC4wLjA.",
	},
];

export default songs;
