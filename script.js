const btnPlay = document.getElementById('btn-play');
const header = document.getElementById('header');
const headingPlayMain = document.getElementById('heading-play--main');
const headingPlaySub = document.getElementById('heading-play--sub');

btnPlay.addEventListener('click', () => {
	btnPlay.classList.remove('btn--moveIn');
	btnPlay.classList.add('btn--moveOut');
	headingPlayMain.classList.add('heading-play--main--moveOut');
	headingPlaySub.classList.add('heading-play--sub--moveOut');
	header.classList.add('header--moveOutBorder');
});