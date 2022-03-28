<div class="parent relative z-10 bg-white">
	<div class="block w-full content">
		<!-- Mobile -->
		<div class="block md:hidden">
			<slot name="mobile">
			</slot>
		</div>

		<!-- Left -->
		<div class="hidden md:block w-1/2 float-left relative h-full border-lines border-r">
			<slot name="left">
			</slot>
		</div>

		<!-- Right -->
		<div class="right-box md:w-1/2 float-left sm:sticky">
			<slot name="right">
			</slot>
		</div>
	</div>

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>


<style lang="postcss">
	.parent {
		min-height: 100vh;
	}

	.content:after {
		content: "";
		display: table;
		clear: both;
  	}

	.right-box {
		min-height: 100vh;
		top: 52px;
	}

	@media screen and (max-width: 640px) {
		.right-box {
			min-height: 0px;
		}
	}
</style>