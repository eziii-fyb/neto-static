<script setup>
	import Header from "../components/Header.vue";
	import HeaderMarquee from "../components/HeaderMarquee.vue";
	import MouseCursor from "../components/MouseCursor.vue";
</script>
<template>
	<MouseCursor />
	<main class="min-h-[200vh] h-full w-full bg-[#0D101B]">
		<Header />
		<section
			class="min-h-[110vh] bg-[url('static-header-background.png')] bg-cover flex justify-center items-center relative"
		>
			<div class="flex flex-col w-full justify-center items-center gap-[48px] -mt-32">
				<div>
					<h1 class="font-ubuntu text-[64px] text-[#FFFEEC] font-bold text-center leading-[73.6px]">
						Seamless Payments,
						<br />
						Anywhere in the World
					</h1>
					<p class="font-ubuntu-mono text-base text-[#709AA9] font-normal text-center leading-4 mt-[15px]">
						Streamline global payments with NETO's secure, fast IME banking.
					</p>
				</div>
				<div class="w-auto inline-flex items-center gap-2">
					<button
						class="bg-[linear-gradient(90deg,_#2A8CF4_0%,_#00FFEA_100%)] ] text-[#0D101B] border border-white/20 font-ubuntu-mono text-base font-semibold px-8 py-3 rounded-[56px]"
					>
						Open Account
					</button>
					<button class="bg-[#1B2135] ] text-[#FFFEEC] font-ubuntu-mono text-base font-semibold px-8 py-3 rounded-[56px]">
						See Our Pricing
					</button>
				</div>
			</div>
			<HeaderMarquee />
		</section>
	</main>
</template>
