# jquery.sticky-scroll.js
Make an element scroll with the page, optionally containing a pin/unpin element

### HTML
```html
<div class="sticky sticky-menu panel width100">
	<h3>
		<span id="unstick-button" class="pull-right sticky-unstick" title="Pin to top of page">
			<img src="/images/icons/pin.png" />
		</span>
		<span id="stick-button" class="pull-right sticky-stick hidden" title="Unpin">
			<img src="/images/icons/unpin.png" />
		</span>
	</h3>
	
	Gonna scroll with the page!
</div>
```

### Javascript
```js
$('.sticky-header').stickyScroll({
	stick: $('#unstick-button'),
	unstick: $('#stick-button')
});
```