import { defineStore } from "pinia";
import { ref } from "vue";

const useMainStore = defineStore(
	"main",
	() => {
		return {};
	},
	{
		persist: true,
	},
);

export default useMainStore;
