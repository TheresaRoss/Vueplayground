<template>
  <h1>HELLO MOTHER {{ test }}</h1>
  <button class="btn btn-primary" @click="increment">Click mezz!</button>
  <div class="row my-4">
    <div class="col">
      <h4 class="text-center">First Dataset Skill</h4>
      <ButtonOne dataset="1" label="Eating"></ButtonOne>
      <ButtonOne dataset="1" label="Drinking"></ButtonOne>
      <ButtonOne dataset="1" label="Sleeping"></ButtonOne>
      <ButtonOne dataset="1" label="Designing"></ButtonOne>
      <ButtonOne dataset="1" label="Coding"></ButtonOne>
      <ButtonOne dataset="1" label="Cycling"></ButtonOne>
      <ButtonOne dataset="1" label="Running"></ButtonOne>
    </div>
    <div class="col">
      <h4 class="text-center">Second Dataset Skill</h4>
      <ButtonOne dataset="2" label="Eating"></ButtonOne>
      <ButtonOne dataset="2" label="Drinking"></ButtonOne>
      <ButtonOne dataset="2" label="Sleeping"></ButtonOne>
      <ButtonOne dataset="2" label="Designing"></ButtonOne>
      <ButtonOne dataset="2" label="Coding"></ButtonOne>
      <ButtonOne dataset="2" label="Cycling"></ButtonOne>
      <ButtonOne dataset="2" label="Running"></ButtonOne>
    </div>
  </div>
  <div>{{ data1 }}</div>
  <div>{{ data2 }}</div>

  <CChart
    type="radar"
    :data="{
      labels: this.label,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,255,0, 0.1)',
          borderColor: '2CCE39',
          pointBackgroundColor: 'white',
          pointBorderColor: '000',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220, 220, 220, 1)',
          data: this.data1
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(0, 162, 255, 0.2)',
          borderColor: '0046FF',
          pointBackgroundColor: 'white',
          pointBorderColor: '#000',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220, 220, 220, 1)',
          data: this.data2
        }
      ]
    }"
  />
</template>
<script>
import { CChart } from '@coreui/vue-chartjs'
import ButtonOne from './ButtonOne.vue'

import { mapMutations, mapState } from 'vuex'
export default {
  components: { CChart, ButtonOne },
  computed: {
    ...mapState('radar', ['test', 'data1', 'data2', 'label'])
  },
  data() {},
  methods: {
    ...mapMutations('radar', [
      'incrementbyone',
      'incrementbyten',
      'decrementbyone',
      'decrementbyten'
    ])
  }
}
</script>
