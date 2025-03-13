<template>
	<div ref="cursor" class="cursor"></div>
</template>

<script setup>
	import { ref, onMounted, onUnmounted } from "vue";
	import gsap from "gsap";

	const cursor = ref(null);

	onMounted(() => {
		const moveCursor = (e) => {
			gsap.to(cursor.value, {
				x: e.clientX,
				y: e.clientY,
				duration: 1.5,
				ease: "power2.out",
			});
		};

		window.addEventListener("mousemove", moveCursor);

		onUnmounted(() => {
			window.removeEventListener("mousemove", moveCursor);
		});
	});
</script>

<style scoped>
	.cursor {
		width: 15px;
		height: 15px;
		background-color: rgba(255, 255, 255, 1);
		border-radius: 50%;
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		transform: translate(-50%, -50%);
		z-index: 9999;
	}
</style>
