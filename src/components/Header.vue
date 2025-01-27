<script setup>
	import { ref, onMounted } from "vue";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	const header = ref(null);

	onMounted(() => {
		gsap.to(header.value, {
			backgroundColor: "#0D101B",
			scrollTrigger: {
				trigger: document.body,
				start: "top top",
				toggleActions: "play none none reverse",
				onEnter: () => header.value.classList.add("shadow-lg"),
				onLeaveBack: () => header.value.classList.remove("shadow-lg"),
			},
			duration: 0.001,
		});
	});
</script>

<template>
	<header
		ref="header"
		class="fixed top-0 inset-x-0 inline-flex justify-evenly items-center w-full h-[89px] z-10 bg-transparent duration-500"
	>
		<a href="/">
			<img
				src="../assets/logo.png"
				alt="neto"
				class="w-[106px] h-[31px]"
			/>
		</a>
		<nav>
			<ul
				class="w-fit px-8 py-4 inline-flex items-center [&>li]:duration-500 [&>li]:transition-all [&>li]:cursor-pointer hover:[&>li]:font-bold hover:[&>li]:text-[#21D927] gap-[51px] [&>li]:text-[#709AA9] [&>li]:font-ubuntu-mono [&>li]:text-base [&>li]:font-normal"
			>
				<li>IBAN</li>
				<li>Checkout</li>
				<li>Neto Card</li>
				<li>Our Services</li>
				<li>About Us</li>
				<li>Our Pricing</li>
			</ul>
		</nav>
		<div class="w-auto inline-flex items-center gap-2">
			<button class="bg-[#1B2135] text-[#FFFEEC] font-ubuntu-mono text-base font-semibold px-8 py-3 rounded-[56px]">
				Login
			</button>
			<button
				class="bg-[linear-gradient(90deg,_#2A8CF4_0%,_#00FFEA_100%)] text-[#0D101B] border border-white/20 font-ubuntu-mono text-base font-semibold px-8 py-3 rounded-[56px]"
			>
				Sign Up
			</button>
		</div>
	</header>
</template>
