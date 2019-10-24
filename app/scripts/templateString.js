const templateString = `
<div class="demo-menu">
	<div class="demo-menu__overlay"></div>
	<div class="demo-menu__nav">
		<ul class="demo-menu__list demo-menu__list--custom-scroll">
			<li class="demo-menu__item" data-for="data-for">
				<a class="demo-menu__link" href="{{ href }}">
					<div class="demo-menu__link-inner">{{ title }}<span class="demo-menu__link-addr">{{ href }}</span>
					</div><i class="demo-menu__thumb-icon" data-thumb="{{ thumb }}">?</i>
				</a>
			</li>
		</ul>
		<div class="demo-menu__thumb-wrap">
			<img alt>
		</div>
		<div class="demo-menu__trigger"><a class="demo-menu__trigger-btn" href="#"><i class="demo-menu__trigger-icon"></i></a>
		</div>
	</div>
</div>
`

export { templateString }