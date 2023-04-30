let shareDiv = document.getElementById("fa-paper-plane");
let sendDivs = document.getElementById("send-div");
let closeBtn = document.getElementById("close-btn");

shareDiv.addEventListener("click", function () {
	sendDivs.style.top = "0%";
})
closeBtn.addEventListener("click", function () {
	sendDivs.style.top = "100%";
})

// likes

let count = document.getElementById('counting').innerText;
let counters = document.getElementById('counting');
let like = document.getElementById('like-icon');
let unLike = document.getElementById('unlike-icon');
count = parseInt(count);


like.addEventListener("click", function () {
	unLike.style.display = "block";
	like.style.display = "none";
	count++;
	console.log(count);
	counters.innerText = `${count}`;
});

unLike.addEventListener("click", function () {
	like.style.display = "block";
	unLike.style.display = "none";
	count--;
	console.log(count);
	counters.innerText = `${count}`;
});

// saved

let lightbook = document.getElementById('light-bookmark');
let darkbook = document.getElementById('dark-bookmark');
let saved = document.getElementById("save-btn");

lightbook.addEventListener("click", function () {
	darkbook.style.display = "block";
	lightbook.style.display = "none";
	saved.style.display = "block";
	saved.style.bottom = "81px";
	setTimeout(slow, 6000);
	function slow() {
		saved.style.display = "none";
	}
});

darkbook.addEventListener("click", function () {
	lightbook.style.display = "block";
	darkbook.style.display = "none";
	saved.style.bottom = "0px";
	saved.style.display = "none";
	saved.style.transition = "all 1s";
});