const expand = document.querySelector("li .add-hide");
const headContent = document.querySelector(".head-content");
const playVideo = document.querySelector(".video-youtube");
const playPoster = document.querySelector(".video-poster");
const youtube = document.querySelector(".page-video__youtube");



	expand.addEventListener("click", ()=>{
		expand.classList.toggle("active");
		headContent.classList.toggle("active");
	})
	playPoster.addEventListener("click", ()=>{
		playPoster.style.display="none";
		youtube.classList.add("hasplayer");
		playVideo.style.display="block";
	})
	
