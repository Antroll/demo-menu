const templateString = `
<div class="dMenu-widget">
	<div class="dMenu-overlay"></div>
	<div class="dMenu-nav">
		<div class="dMenu-nav__search dMenu-search">
			<div class="dMenu-search__box">
				<input class="dMenu-search__input" id="dMenu-search" type="text" placeholder="search..." name="dMenu-search">
				<label class="dMenu-search__label" for="dMenu-search"><i class="dMenu-icon dMenu-icon--search"></i>
				</label>
			</div>
			<div class="dMenu-search__message dMenu-search__message--hidden">Nothing found 😐</div>
		</div>
		<div class="dMenu-nav__list dMenu-nav__list--custom-scroll">
			<div class="dMenu-nav__item" data-for="data-for"><a class="dMenu-nav__link" href="{{ href }}"><i class="dMenu-nav__link-num"></i><div class="dMenu-nav__link-inner">{{ title }}<span class="dMenu-nav__link-addr">{{ href }}</span></div><i class="dMenu-nav__thumb-icon" data-thumb="{{ thumb }}">?</i></a>
			</div>
		</div>
		<div class="dMenu-thumb-wrap dMenu-thumb-wrap--position">
			<img alt>
		</div>
		<div class="dMenu-trigger"><a class="dMenu-trigger__btn" href="#"><i class="dMenu-trigger__icon"></i></a>
		</div>
	</div>
</div>
`

export { templateString }