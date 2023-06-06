<template>
  <div class="d-flex justify-content-center">
    <table class="chess-table">
      <tbody>
        <tr v-for="(item, index) in table" :key="item">
          <td
            class="border border-danger chess-block"
            v-for="(item2, index2) in item"
            :key="item2"
            :style="{
              backgroundColor:
                (index % 2 === 0 && index2 % 2 === 0) || (index % 2 !== 0 && index2 % 2 !== 0)
                  ? 'rgba(235,240,21,0.2 )'
                  : 'rgba(4,255,0,0.7)'
            }"
            :class="{ highlighted: item2.abletomove, capture: item2.abletocapture }"
            @click="moveabletile({ row: index, col: index2 })"
          >
            <p>{{ item2.abletomove + '' + index + '' + index2 }}</p>
            <div
              :style="{
                visibility: item2.color == 'x' ? 'hidden' : 'visible'
              }"
              :class="
                item2.color == 'white'
                  ? 'bg-white border border-black'
                  : 'bg-black text-white border border-white'
              "
              class="chess-piece rounded-circle m-3"
            >
              {{ item2.piece }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <div>
      <h3>Click?:{{ clicked }}</h3>
    </div>
    <div>
      <h3>Turn?: {{ turn }}</h3>
    </div>
    <div>
      <h3>
        White Score: {{ score.white }}
        <h6>{{ whitePieces }}</h6>
      </h3>
      <h3>
        Black Score: {{ score.black }}
        <h6>{{ blackPieces }}</h6>
      </h3>
    </div>
  </div>
  <div>
    <button class="btn btn-primary" @click="initChessboard('black')">Start as white!</button>
    <button class="btn btn-secondary" @click="initChessboard('white')">Start as black!</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('chess', ['table', 'turn', 'clicked', 'score', 'whitePieces', 'blackPieces'])
  },
  methods: {
    ...mapMutations('chess', ['initChessboard', 'moveabletile'])
  }
}
</script>
<style>
.chess-block {
  position: relative;
}
.chess-piece {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.capture {
  background-color: red !important;
}
.highlighted {
  background-color: aqua !important;
}
.chess-table {
  table-layout: fixed;
}
</style>
