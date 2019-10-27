let thumbWrap
let thumbImg
let nav
let states

const initThumbs = function () {
	const { menu, selector } = this
	states = this.states

	selector.THUMB_WRAP = '.dMenu-thumb-wrap';
	states.THUMB_WRAP_ACTIVE = 'dMenu-thumb-wrap--active';

	thumbWrap = menu.querySelector(selector.THUMB_WRAP)
	thumbImg = thumbWrap.querySelector('img');
	nav = menu.querySelector(selector.NAV);

	Array.prototype.forEach.call(
		menu.querySelectorAll(selector.THUMB_ICON), thumbIcon => {
			thumbIcon.addEventListener('mouseenter', thumbIconMouseenter);
			thumbIcon.addEventListener('mouseleave', thumbIconMouseleave);
		})
}

const thumbIconMouseenter = (e) => {
	const src = e.target.getAttribute('data-thumb')
	const img = thumbWrap.querySelector('img')
	const navHeight = nav.clientHeight

	img.style.maxHeight = `${navHeight}px`;
	thumbWrap.classList.add(states.THUMB_WRAP_ACTIVE)
	thumbImg.setAttribute('src', src)
}

const thumbIconMouseleave = () => {
	thumbWrap.classList.remove(states.THUMB_WRAP_ACTIVE)
	thumbImg.removeAttribute('src')
}

export {
	initThumbs,
}