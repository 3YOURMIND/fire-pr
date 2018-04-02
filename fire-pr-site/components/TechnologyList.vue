<template>
  <div class="technology-logo__container">
    <div v-for="(technology, index) in technologies" :key="index" class="technology-logo__item-container">
      <a :href="technology.website" target="_blank" rel="noopener noreferrer">
        <img :src="technology.logo" :alt="technology.logoDescription" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
	name: 'TechnologyList',
	props: {
		technologies: Array,
	},
};
</script>

<style lang="scss" scoped>
.technology-logo__container {
	display: flex;
	justify-content: center;
	max-width: 1000px;
	position: relative;
	flex-direction: row;
	flex-wrap: wrap;
}

.technology-logo__item-container {
	min-width: 168px;
	max-width: 168px;
	margin-top: 20px;
	filter: grayscale(1);
	transition: all 0.15s ease-in;

	&:hover {
		filter: grayscale(0);
		transition: all 0.15s ease-out;
	}
}
</style>
