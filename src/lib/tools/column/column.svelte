<div class="parent z-20">
	<div class="block w-full content">
		<!-- Mobile -->
		<div class="block md:hidden">
			<slot name="mobile">
			</slot>
		</div>

		<!-- Left -->
		<div class="hidden md:block w-1/2 float-left h-full border-lines-1 border-r">
			<slot name="left">
			</slot>
		</div>

		<!-- Right -->
		<div class="right-box md:w-1/2 float-left sm:sticky top-16">
			<slot name="right">
			</slot>
		</div>
	</div>

	<div class="border-lines-1 border-b w-full -mt-1px">
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
	}

	@media screen and (max-width: 640px) {
		.right-box {
			min-height: 0px;
		}
	}
</style>