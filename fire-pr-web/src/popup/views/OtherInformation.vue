<template>
  <div>
    <BackButton />
    <ol v-if="informations.length > 0">
      <li v-for="information in informations" :key="information" v-text="information" />
    </ol>
    <div v-if="informations.length < 1">
      No Information given
    </div>
    <hr />
    <input type="text" name="merger" v-model="text" />
    <label>Other Information Note</label>
    <button @click="addOtherInformation">Add other information</button>
    <button :disable="nextDisabled" @click="nextStep">Next</button>
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  name: 'OtherInformation',
  components: {
    BackButton,
  },
  data() {
    return {
      informations: [],
      text: '',
    };
  },
  methods: {
    addOtherInformation() {
      this.informations.push(this.text);
      this.text = '';
    },
    nextStep() {
      this.$store.dispatch('saveOtherInformations', this.informations);
      this.$router.push('/changelog');
    },
  },
};
</script>
