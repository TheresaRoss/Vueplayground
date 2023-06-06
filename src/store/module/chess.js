import { make } from 'vuex-pathify'

const state = {
  table: [
    [
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false }
    ],
    [
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false }
    ],
    [
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false }
    ],
    [
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false }
    ],
    [
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false }
    ],
    [
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false }
    ],
    [
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false }
    ],
    [
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false },
      { piece: 'x', color: 'x', abletomove: false, abletocapture: false }
    ]
  ],
  whitePieces: [
    { piece: 'P', number: 8 }, // Pawns
    { piece: 'R', number: 2 }, // Rooks
    { piece: 'N', number: 2 }, // Knights
    { piece: 'B', number: 2 }, // Bishops
    { piece: 'Q', number: 1 }, // Queen
    { piece: 'K', number: 1 } // King
  ],
  blackPieces: [
    { piece: 'P', number: 8 }, // Pawns
    { piece: 'R', number: 2 }, // Rooks
    { piece: 'N', number: 2 }, // Knights
    { piece: 'B', number: 2 }, // Bishops
    { piece: 'Q', number: 1 }, // Queen
    { piece: 'K', number: 1 } // King
  ],
  side: '', //white meaning white on bottom ( need to minus on moving forward),
  clicked: false,
  pastlocation: { col: 0, row: 0 },
  turn: 'white',
  gameover: 'x',
  check: false,
  score: { black: 0, white: 0 }
}

const mutations = {
  ...make.mutations(state),
  initChessboard(state, payload) {
    console.log(payload)

    const color = payload == 'white' ? 'black' : 'white'
    state.side = payload == 'white' ? 'black' : 'white'
    state.table[0] = [
      { piece: 'R', color: payload, abletomove: false, abletocapture: false },
      { piece: 'N', color: payload, abletomove: false, abletocapture: false },
      { piece: 'B', color: payload, abletomove: false, abletocapture: false },
      { piece: 'Q', color: payload, abletomove: false, abletocapture: false },
      { piece: 'K', color: payload, abletomove: false, abletocapture: false },
      { piece: 'B', color: payload, abletomove: false, abletocapture: false },
      { piece: 'N', color: payload, abletomove: false, abletocapture: false },
      { piece: 'R', color: payload, abletomove: false, abletocapture: false }
    ]
    state.table[1] = [
      { piece: 'P', color: payload, abletomove: false, abletocapture: false, firstmove: true },
      { piece: 'P', color: payload, abletomove: false, abletocapture: false, firstmove: true },
      { piece: 'P', color: payload, abletomove: false, abletocapture: false, firstmove: true },
      { piece: 'P', color: payload, abletomove: false, abletocapture: false, firstmove: true },
      { piece: 'P', color: payload, abletomove: false, abletocapture: false, firstmove: true },
      { piece: 'P', color: payload, abletomove: false, abletocapture: false, firstmove: true },
      { piece: 'P', color: payload, abletomove: false, abletocapture: false, firstmove: true },
      { piece: 'P', color: payload, abletomove: false, abletocapture: false, firstmove: true }
    ]

    // Initialize black pieces
    state.table[7] = [
      { piece: 'R', color: color, abletomove: false },
      { piece: 'N', color: color, abletomove: false },
      { piece: 'B', color: color, abletomove: false },
      { piece: 'Q', color: color, abletomove: false },
      { piece: 'K', color: color, abletomove: false },
      { piece: 'B', color: color, abletomove: false },
      { piece: 'N', color: color, abletomove: false },
      { piece: 'R', color: color, abletomove: false }
    ]
    state.table[6] = [
      { piece: 'P', color: color, abletomove: false, firstmove: true },
      { piece: 'P', color: color, abletomove: false, firstmove: true },
      { piece: 'P', color: color, abletomove: false, firstmove: true },
      { piece: 'P', color: color, abletomove: false, firstmove: true },
      { piece: 'P', color: color, abletomove: false, firstmove: true },
      { piece: 'P', color: color, abletomove: false, firstmove: true },
      { piece: 'P', color: color, abletomove: false, firstmove: true },
      { piece: 'P', color: color, abletomove: false, firstmove: true }
    ]
    this.commit('chess/countscore', 'black')
    this.commit('chess/countscore', 'white')
  },
  countscore(state, payload) {
    if (payload == 'black') {
      let score = 0
      state.blackPieces.forEach((entry) => {
        switch (entry.piece) {
          case 'P':
            score += 1 * entry.number
            break
          case 'R':
            score += 5 * entry.number
            break
          case 'B':
            score += 3 * entry.number
            break
          case 'Q':
            score += 8 * entry.number
            break
          case 'K':
            score += 0 * entry.number
            break
          case 'N':
            score += 3 * entry.number
            break
          default:
        }
      })
      state.score.black = score
    } else {
      let score = 0
      state.whitePieces.forEach((entry) => {
        switch (entry.piece) {
          case 'P':
            score += 1 * entry.number
            break
          case 'R':
            score += 5 * entry.number
            break
          case 'B':
            score += 3 * entry.number
            break
          case 'Q':
            score += 8 * entry.number
            break
          case 'K':
            score += 0 * entry.number
            break
          case 'N':
            score += 3 * entry.number
            break
          default:
        }
      })
      state.score.white = score
    }
  },
  resetmove(state) {
    //reset all abletomove to false
    state.table.forEach((row) => {
      row.forEach((item) => {
        item.abletocapture = false
        item.abletomove = false
      })
    })
  },
  moveabletileknight(state, payload) {
    // Define the possible movement directions for the knight
    const directions = [
      { row: -2, col: -1 },
      { row: -2, col: 1 },
      { row: -1, col: -2 },
      { row: -1, col: 2 },
      { row: 1, col: -2 },
      { row: 1, col: 2 },
      { row: 2, col: -1 },
      { row: 2, col: 1 }
    ]

    // Iterate over the possible directions
    for (const direction of directions) {
      const newRow = payload.row + direction.row
      const newCol = payload.col + direction.col

      // Check if the new position is within the table boundaries
      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        const targetPiece = state.table[newRow][newCol].piece
        const targetColor = state.table[newRow][newCol].color

        // Check if the target position is empty or occupied by an opponent's piece
        if (targetPiece === 'x') {
          state.table[newRow][newCol].abletomove = true
        }
        if (targetColor != state.table[payload.row][payload.col].color && targetColor != 'x') {
          //indicate whether the first chess piece to block the movement can be capture?
          state.table[newRow][newCol].abletocapture = true
        }
      }
    }
  },
  moveabletileking(state, payload) {
    const directions = [
      { row: -1, col: -1 },
      { row: -1, col: 0 },
      { row: -1, col: 1 },
      { row: 0, col: -1 },
      { row: 0, col: 1 },
      { row: 1, col: -1 },
      { row: 1, col: 0 },
      { row: 1, col: 1 }
    ]

    // Iterate over the possible directions
    for (const direction of directions) {
      const newRow = payload.row + direction.row
      const newCol = payload.col + direction.col

      // Check if the new position is within the table boundaries
      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        const targetPiece = state.table[newRow][newCol].piece
        const targetColor = state.table[newRow][newCol].color

        // Check if the target position is empty or occupied by an opponent's piece
        if (targetPiece === 'x') {
          state.table[newRow][newCol].abletomove = true
        }

        if (targetColor != state.table[payload.row][payload.col].color && targetColor != 'x') {
          //indicate whether the first chess piece to block the movement can be capture?
          state.table[newRow][newCol].abletocapture = true
        }
      }
    }
  },
  moveabletilequeen(state, payload) {
    this.commit('chess/moveabletilebishop', payload)
    this.commit('chess/moveabletilerook', payload)
  },
  moveabletilebishop(state, payload) {
    const selectedcolor = state.table[payload.row][payload.col].color
    let i = 1
    while (payload.row + i < 8 && payload.col + i < 8) {
      const position = state.table[payload.row + i][payload.col + i]
      if (position.piece != 'x') {
        if (position.color != 'x' && position.color != selectedcolor) {
          //indicate whether the first chess piece to block the movement can be capture?
          position.abletocapture = true
        }
        break
      } else {
        position.abletomove = true
      }
      i++
    }
    i = 1
    while (payload.row - i >= 0 && payload.col - i >= 0) {
      const position = state.table[payload.row - i][payload.col - i]
      if (position.piece != 'x') {
        if (position.color != 'x' && position.color != selectedcolor) {
          //indicate whether the first chess piece to block the movement can be capture?
          position.abletocapture = true
        }
        break
      } else {
        position.abletomove = true
      }
      i++
    }
    i = 1
    while (payload.row + i < 8 && payload.col - i >= 0) {
      const position = state.table[payload.row + i][payload.col - i]
      if (position.piece != 'x') {
        if (position.color != 'x' && position.color != selectedcolor) {
          //indicate whether the first chess piece to block the movement can be capture?
          position.abletocapture = true
        }
        break
      } else {
        position.abletomove = true
      }

      i++
    }
    i = 1
    while (payload.row - i >= 0 && payload.col + i < 8) {
      const position = state.table[payload.row - i][payload.col + i]
      if (position.piece != 'x') {
        if (position.color != 'x' && position.color != selectedcolor) {
          //indicate whether the first chess piece to block the movement can be capture?
          position.abletocapture = true
        }
        break
      } else {
        position.abletomove = true
      }

      i++
    }
    i = 0
  },

  moveabletilerook(state, payload) {
    //w8 for capture logic
    //rook move
    const selectedcolor = state.table[payload.row][payload.col].color
    for (let i = payload.row + 1; i < 8; i++) {
      const position = state.table[i][payload.col]
      if (position.piece != 'x') {
        if (position.color != 'x' && position.color != selectedcolor) {
          //indicate whether the first chess piece to block the movement can be capture?
          position.abletocapture = true
        }
        break
      } else {
        position.abletomove = true
      }
    }
    for (let i = payload.row - 1; i >= 0; i--) {
      const position = state.table[i][payload.col]
      if (position.piece != 'x') {
        if (position.color != 'x' && position.color != selectedcolor) {
          //indicate whether the first chess piece to block the movement can be capture?
          position.abletocapture = true
        }
        break
      } else {
        position.abletomove = true
      }
    }
    for (let i = payload.col + 1; i < 8; i++) {
      const position = state.table[payload.row][i]
      if (position.piece != 'x') {
        if (position.color != 'x' && position.color != selectedcolor) {
          //indicate whether the first chess piece to block the movement can be capture?
          position.abletocapture = true
        }
        break
      } else {
        position.abletomove = true
      }
    }
    for (let i = payload.col - 1; i >= 0; i--) {
      const position = state.table[payload.row][i]
      if (position.piece != 'x') {
        if (position.color != 'x' && position.color != selectedcolor) {
          //indicate whether the first chess piece to block the movement can be capture?
          position.abletocapture = true
        }
        break
      } else {
        position.abletomove = true
      }
    }
  },

  moveabletilepawn(state, payload) {
    const selectedcolor = state.table[payload.row][payload.col].color
    if (
      (state.side == 'black' && selectedcolor == 'white') ||
      (state.side == 'white' && selectedcolor == 'black')
    ) {
      if (payload.row + 1 < 8) {
        //move logic
        if (state.table[payload.row + 1][payload.col].piece == 'x') {
          state.table[payload.row + 1][payload.col].abletomove = true
          if (
            state.table[payload.row][payload.col].firstmove &&
            state.table[payload.row + 2][payload.col].piece == 'x'
          ) {
            state.table[payload.row + 2][payload.col].abletomove = true
          }
        }
        //capture logic
        if (
          payload.col + 1 < 8 &&
          state.table[payload.row + 1][payload.col + 1].color != 'x' &&
          state.table[payload.row + 1][payload.col + 1].color != selectedcolor
        ) {
          state.table[payload.row + 1][payload.col + 1].abletocapture = true
        }
        if (
          payload.col - 1 >= 0 &&
          state.table[payload.row + 1][payload.col - 1].color != 'x' &&
          state.table[payload.row + 1][payload.col - 1].color != selectedcolor
        ) {
          state.table[payload.row + 1][payload.col - 1].abletocapture = true
        }
      }
    } else {
      if (payload.row - 1 > -1) {
        if (state.table[payload.row - 1][payload.col].piece == 'x') {
          state.table[payload.row - 1][payload.col].abletomove = true
          if (
            state.table[payload.row][payload.col].firstmove &&
            state.table[payload.row - 2][payload.col].piece == 'x'
          ) {
            state.table[payload.row - 2][payload.col].abletomove = true
          }
        }
      }

      //capture logic
      if (
        payload.col + 1 < 8 &&
        state.table[payload.row - 1][payload.col + 1].color != 'x' &&
        state.table[payload.row - 1][payload.col + 1].color != selectedcolor
      ) {
        state.table[payload.row - 1][payload.col + 1].abletocapture = true
      }
      if (
        payload.col - 1 >= 0 &&
        state.table[payload.row - 1][payload.col - 1].color != 'x' &&
        state.table[payload.row - 1][payload.col - 1].color != selectedcolor
      ) {
        state.table[payload.row - 1][payload.col - 1].abletocapture = true
      }
    }
  },

  moveabletile(state, payload) {
    //console.log(payload)
    const selectedcolor = state.table[payload.row][payload.col].color
    if (selectedcolor === state.turn || state.clicked) {
      const selectedpiece = state.table[payload.row][payload.col].piece
      if (!state.clicked) {
        //choose which piece to move

        state.clicked = true
        state.pastlocation = payload
        switch (selectedpiece) {
          case 'P':
            this.commit('chess/moveabletilepawn', payload)
            break
          case 'R':
            this.commit('chess/moveabletilerook', payload)
            break
          case 'B':
            this.commit('chess/moveabletilebishop', payload)
            break
          case 'Q':
            this.commit('chess/moveabletilequeen', payload)
            break
          case 'K':
            this.commit('chess/moveabletileking', payload)
            break
          case 'N':
            this.commit('chess/moveabletileknight', payload)
            break
          default:
            state.clicked = false
        }
      } else {
        //already choose which piece to move
        //check if that is a valid move
        if (
          state.table[payload.row][payload.col].abletomove ||
          state.table[payload.row][payload.col].abletocapture
        ) {
          const savedcolor = state.table[state.pastlocation.row][state.pastlocation.col].color
          //valid move
          let capturedPiece
          if (state.table[payload.row][payload.col].abletocapture) {
            //capture case
            capturedPiece = state.table[payload.row][payload.col].piece

            if (savedcolor == 'white') {
              const pieceIndex = state.blackPieces.findIndex(
                (entry) => entry.piece === capturedPiece
              )
              state.blackPieces[pieceIndex].number -= 1
              this.commit('chess/countscore', 'black')
            } else {
              const pieceIndex = state.whitePieces.findIndex(
                (entry) => entry.piece === capturedPiece
              )
              state.whitePieces[pieceIndex].number -= 1
              this.commit('chess/countscore', 'white')
            }
          }

          state.table[payload.row][payload.col] = {
            //move the piece to new location
            piece: state.table[state.pastlocation.row][state.pastlocation.col].piece,
            color: state.table[state.pastlocation.row][state.pastlocation.col].color,
            abletomove: false
          }

          state.table[state.pastlocation.row][state.pastlocation.col] = {
            //remove the piece from old location
            piece: 'x',
            color: 'x',
            abletomove: false
          }

          this.commit('chess/resetmove')
          state.clicked = false
          state.turn = savedcolor == 'white' ? 'black' : 'white'
        } else {
          //handle invalid move
          this.commit('chess/resetmove')
          state.clicked = false
        }
      }
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
