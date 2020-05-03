const btnPlay = document.getElementById('btn-play');
const header = document.getElementById('header');
const headingPlayMain = document.getElementById('heading-play--main');
const headingPlaySub = document.getElementById('heading-play--sub');
const game = document.getElementById('game');

btnPlay.addEventListener('click', () => {
	btnPlay.classList.remove('btn--moveIn');
	btnPlay.classList.add('btn--moveOut');
	headingPlayMain.classList.add('heading-play--main--moveOut');
	headingPlaySub.classList.add('heading-play--sub--moveOut');
	header.classList.add('header--moveOutBorder');
	setTimeout(showGame, 1000);
});

function showGame() {
	header.classList.add('hide');
	game.classList.remove('hide');
	game.classList.add('show');
}

var cards = document.querySelectorAll('.card');

cards.forEach(function (item, idx) {
	item.addEventListener('click', function () {
		item.classList.toggle('is-flipped');
	});
});