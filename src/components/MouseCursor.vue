<script setup>
	import { ref, onMounted, onUnmounted } from "vue";
	import gsap from "gsap";

	const cursor = ref(null);

	const handleMouseMove = (event) => {
		// Use GSAP to animate cursor movement
		gsap.to(cursor.value, {
			x: event.clientX,
			y: event.clientY,
			duration: 0.1, // Smooth transition duration
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
	<div
		ref="cursor"
		class="cursor"
	></div>
</template>

<style scoped>
	.cursor {
		position: fixed;
		width: 20px;
		height: 20px;
		background-color: white;
		border-radius: 50%;
		pointer-events: none;
		z-index: 1000;
		transform: translate(-50%, -50%);
		mix-blend-mode: difference;
	}
</style>
