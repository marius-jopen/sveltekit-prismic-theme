<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

	export let slice
    export let inputText
	export let inputDirection

	let text
	let direction

	if (slice == undefined){
		text = inputText
		direction = inputDirection
	} else {
		text = slice.primary.text[0].text
		direction = slice.primary.direction
	}
</script>

<div class="py-3 border-b border-lines">
	<Splide
	extensions={{ AutoScroll }}
	options={{
		type: 'loop',
		drag: 'free',
		gap: '2',
		start: '2',
		arrows: false,
		focus: 'center',
  		perPage: 3,
		direction: direction,
		pagination: false,
		autoScroll: {
			speed: 2,
		}
	}}>
		<SplideSlide>
			<div class="text-xl">
				{text}
			</div>
		</SplideSlide>
	</Splide>
</div>