<template>
  <div class="row mx-2">
    <button
      class="col btn btn-danger"
      @click="decrementbyten({ label: this.label, dataset: this.dataset })"
    >
      -10
    </button>
    <button
      class="col mx-2 btn btn-danger"
      @click="decrementbyone({ label: this.label, dataset: this.dataset })"
    >
      -1
    </button>
    <label class="col">{{ label }}</label>
    <button
      class="col mx-2 btn btn-success"
      @click="incrementbyone({ label: this.label, dataset: this.dataset })"
    >
      +1
    </button>
    <button
      class="col btn btn-success"
      @click="incrementbyten({ label: this.label, dataset: this.dataset })"
    >
      +10
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['label', 'dataset'],
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
