<template>
  <div>H2s</div>
  <div>
    <h1>{{ data }}</h1>

    <form class="" @submit.prevent="addnewdatanow">
      <div class="row mt-5">
        <label class="col-sm" :for="key">Key</label>

        <input
          class="col-sm-10 border rounded border-primary"
          id="key"
          required
          v-model="newkey"
          placeholder="jojo"
          :maxlength="10"
        />
      </div>
      <div class="row my-2">
        <label :for="value" class="col-sm">Value</label>
        <input
          id="value"
          class="col-sm-10 rounded form-input border border-primary"
          required
          v-model="newvalue"
          type="number"
          placeholder="20"
          :max="200"
          :min="0"
        />
        <div class="row my-2">
          <label class="col-sm-5" :for="choose">Choose Which Dataset To Add Data</label>
          <select
            required
            v-model="selectdataset"
            class="col-sm-7 rounded form-input border border-primary"
            id="choose"
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
      <button class="btn btn-danger">FUCK</button>
    </form>
    <div>{{ newkey }} and {{ newvalue }}</div>
    <CChart type="line" :wrapper="false" :data="dynamicDataset" />
  </div>
</template>
<script>
import { CChart } from '@coreui/vue-chartjs'

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('bar', ['test', 'labels', 'data1', 'data2']),
    dynamicDataset() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(0, 255, 232, 0.2)',
            borderColor: '0055FF',
            pointBackgroundColor: 'rgba(220, 220, 220, 1)',
            pointBorderColor: '000000',
            data: this.data1
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255, 45, 0, 0.5)',
            borderColor: 'FF2D00',
            pointBackgroundColor: 'FFFFFF',
            pointBorderColor: '000000',
            data: this.data2
          }
        ]
      }
    }
  },
  data() {
    return {
      newkey: '',
      newvalue: '',
      selectdataset: 0
    }
  },
  methods: {
    addnewdatanow() {
      console.log('hi')
      this.$store.commit('bar/addnewdata', {
        label: this.newkey,
        value: this.newvalue,
        dataset: this.selectdataset
      })

      // Reset input fields
      this.newkey = ''
      this.selectdataset = 0
      this.newvalue = ''
    }
  },
  components: { CChart }
}
</script>
