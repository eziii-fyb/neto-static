<script setup>
	import { ref, onMounted, onUnmounted } from "vue";
	import gsap from "gsap";

	const cursor = ref(null);

	const handleMouseMove = (event) => {
		// Use GSAP to animate cursor movement
		gsap.to(cursor.value, {
			x: event.clientX,
			y: event.clientY,
			duration: 2, // Smooth transition duration
			ease: "power3.out",
		});
	};

	onMounted(() => {
		window.addEventListener("mousemove", handleMouseMove);
	});

	onUnmounted(() => {
		window.removeEventListener("mousemove", handleMouseMove);
	});
</script>

<template>
	<div class="fixed inset-0 bg-[#0D101B]">
		<div
			ref="cursor"
			class="cursor"
		></div>
	</div>
</template>

<style scoped>
	.cursor {
		position: fixed;
		width: 40px;
		height: 40px;
		background-color: rgba(255, 255, 255, 0.452);
		border-radius: 50%;
		pointer-events: none;
		z-index: 2;
		filter: blur(15px); /* Softer smoke */
		transform: translate(-50%, -50%);
		/* mix-blend-mode: difference; */
	}
</style>
