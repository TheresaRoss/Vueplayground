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
  score: { black: 0, white: 0 },
  blackposition: {},
  whiteposition: {},
  choosepiece: '',
  ischecked: false
}

const mutations = {
  ...make.mutations(state),
  initChessboard(state, payload) {
    console.log(payload)

    const color = payload == 'white' ? 'black' : 'white'
    state.side = payload == 'white' ? 'black' : 'white'

    if (color == 'black') {
      state.whiteposition = {
        R1: { row: 0, col: 0 },
        R2: { row: 0, col: 7 },
        N1: { row: 0, col: 1 },
        N2: { row: 0, col: 6 },
        B1: { row: 0, col: 2 },
        B2: { row: 0, col: 5 },
        Q: { row: 0, col: 3 },
        K: { row: 0, col: 4 },
        P1: { row: 1, col: 0 },
        P2: { row: 1, col: 1 },
        P3: { row: 1, col: 2 },
        P4: { row: 1, col: 3 },
        P5: { row: 1, col: 4 },
        P6: { row: 1, col: 5 },
        P7: { row: 1, col: 6 },
        P8: { row: 1, col: 7 }
      }
      state.blackposition = {
        R1: { row: 7, col: 0 },
        R2: { row: 7, col: 7 },
        N1: { row: 7, col: 1 },
        N2: { row: 7, col: 6 },
        B1: { row: 7, col: 2 },
        B2: { row: 7, col: 5 },
        Q: { row: 7, col: 3 },
        K: { row: 7, col: 4 },
        P1: { row: 6, col: 0 },
        P2: { row: 6, col: 1 },
        P3: { row: 6, col: 2 },
        P4: { row: 6, col: 3 },
        P5: { row: 6, col: 4 },
        P6: { row: 6, col: 5 },
        P7: { row: 6, col: 6 },
        P8: { row: 6, col: 7 }
      }
    } else {
      state.blackposition = {
        R1: { row: 0, col: 0 },
        R2: { row: 0, col: 7 },
        N1: { row: 0, col: 1 },
        N2: { row: 0, col: 6 },
        B1: { row: 0, col: 2 },
        B2: { row: 0, col: 5 },
        Q: { row: 0, col: 3 },
        K: { row: 0, col: 4 },
        P1: { row: 1, col: 0 },
        P2: { row: 1, col: 1 },
        P3: { row: 1, col: 2 },
        P4: { row: 1, col: 3 },
        P5: { row: 1, col: 4 },
        P6: { row: 1, col: 5 },
        P7: { row: 1, col: 6 },
        P8: { row: 1, col: 7 }
      }
      state.whiteposition = {
        R1: { row: 7, col: 0 },
        R2: { row: 7, col: 7 },
        N1: { row: 7, col: 1 },
        N2: { row: 7, col: 6 },
        B1: { row: 7, col: 2 },
        B2: { row: 7, col: 5 },
        Q: { row: 7, col: 3 },
        K: { row: 7, col: 4 },
        P1: { row: 6, col: 0 },
        P2: { row: 6, col: 1 },
        P3: { row: 6, col: 2 },
        P4: { row: 6, col: 3 },
        P5: { row: 6, col: 4 },
        P6: { row: 6, col: 5 },
        P7: { row: 6, col: 6 },
        P8: { row: 6, col: 7 }
      }
    }
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
    // console.log(state.whiteposition, state.blackposition)
  },
  checkornot(state, payload) {
    let position
    //check on the ending of turn, meaning check other side
    if (payload.color == 'white') {
      //find black king first
      position = state.blackposition.K

      for (const pieceKey in state.whiteposition) {
        const payload = state.whiteposition[pieceKey]

        if (payload.col != 'x') {
          const selectedcolor = state.table[payload.row][payload.col].color
          const selectedpiece = pieceKey.charAt(0)

          switch (selectedpiece) {
            case 'P':
              if (
                (state.side == 'black' && selectedcolor == 'white') ||
                (state.side == 'white' && selectedcolor == 'black')
              ) {
                if (payload.col + 1 < 8) {
                  state.table[payload.row + 1][payload.col + 1].abletocapture = true
                }
                if (payload.col - 1 >= 0) {
                  state.table[payload.row + 1][payload.col - 1].abletocapture = true
                }
              } else {
                //capture logic
                if (payload.col + 1 < 8) {
                  state.table[payload.row - 1][payload.col + 1].abletocapture = true
                }
                if (payload.col - 1 >= 0) {
                  state.table[payload.row - 1][payload.col - 1].abletocapture = true
                }
              }
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
              if (payload.checkking) {
                //protect infinite loop
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
                    state.table[newRow][newCol].abletocapture = true
                  }
                }
                break
              }

              break
            case 'N':
              this.commit('chess/moveabletileknight', payload)
              break
            default:
          }
        }
      }
    } else {
      position = state.whiteposition.K

      for (const pieceKey in state.blackposition) {
        const payload = state.blackposition[pieceKey]
        if (payload.col != 'x') {
          const selectedpiece = pieceKey.charAt(0)
          const selectedcolor = state.table[payload.row][payload.col].color

          switch (selectedpiece) {
            case 'P':
              //special case

              if (
                (state.side == 'black' && selectedcolor == 'white') ||
                (state.side == 'white' && selectedcolor == 'black')
              ) {
                if (payload.col + 1 < 8) {
                  state.table[payload.row + 1][payload.col + 1].abletocapture = true
                }
                if (payload.col - 1 >= 0) {
                  state.table[payload.row + 1][payload.col - 1].abletocapture = true
                }
              } else {
                //capture logic
                if (payload.col + 1 < 8) {
                  state.table[payload.row - 1][payload.col + 1].abletocapture = true
                }
                if (payload.col - 1 >= 0) {
                  state.table[payload.row - 1][payload.col - 1].abletocapture = true
                }
              }
              break
            case 'R':
              this.commit('chess/moveabletilerook', payload)
              break
            case 'B':
              this.commit('chess/moveabletilebishop', payload)
              break
            case 'Q':
              console.log('?????????')
              this.commit('chess/moveabletilequeen', payload)
              break
            case 'K':
              if (payload.checkking) {
                //protect infinite loop
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
                    state.table[newRow][newCol].abletocapture = true
                  }
                }
              }
              break
            case 'N':
              this.commit('chess/moveabletileknight', payload)
              break
            default:
          }
        }
      }
    }
    if (state.table[position.row][position.col].abletocapture) {
      console.log('FUCKING CHECK')
      state.ischecked = true
    } else {
      if (state.table[position.row][position.col].abletomove && payload.checkking) {
        state.ischecked = true
      } else {
        state.ischecked = false
      }
    }

    this.commit('chess/resetmove')
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
        item.abletomove = false
        item.abletocapture = false
      })
    })
  },
  resetcapture(state) {
    //reset all abletomove to false
    state.table.forEach((row) => {
      row.forEach((item) => {
        item.abletocapture = false
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
  getPieceAtPosition(state, payload) {
    if (payload.color == 'white') {
      // Check if the position matches any of the white pieces
      for (const key in state.whiteposition) {
        const piecePosition = state.whiteposition[key]
        if (piecePosition.row === payload.row && piecePosition.col === payload.col) {
          state.choosepiece = key
        }
      }
    } else {
      // Check if the position matches any of the black pieces
      for (const key in state.blackposition) {
        const piecePosition = state.blackposition[key]
        if (piecePosition.row === payload.row && piecePosition.col === payload.col) {
          state.choosepiece = key
        }
      }
    }

    // No piece found at the given position
    return null
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

    let abletocapture = []
    let abletomove = []
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
          //console.log(newCol, newRow)
          //check if this move make king go in check?
          if (state.turn == 'black') {
            state.blackposition.K = { col: newCol, row: newRow }
            this.commit('chess/checkornot', { color: 'white', checkking: true })

            if (!state.ischecked) {
              abletomove.push({ col: newCol, row: newRow })
            }

            state.blackposition.K = { col: payload.col, row: payload.row }
          } else {
            state.whiteposition.K = { col: newCol, row: newRow }
            console.log('hi')
            this.commit('chess/checkornot', { color: 'black', checkking: true })
            console.log('move to ', newRow, newCol)
            console.log(state.ischecked)
            if (!state.ischecked) {
              abletomove.push({ col: newCol, row: newRow })
            }

            state.whiteposition.K = { col: payload.col, row: payload.row }
          }
        }

        if (targetColor != state.table[payload.row][payload.col].color && targetColor != 'x') {
          //indicate whether the first chess piece to block the movement can be capture?

          if (state.turn == 'black') {
            state.blackposition.K = { col: newCol, row: newRow }
            this.commit('chess/checkornot', { color: 'white', checkking: true })

            if (!state.ischecked) {
              //if can capture without putting itself to check then can capture
              abletocapture.push({ col: newCol, row: newRow })
            }

            state.blackposition.K = { col: payload.col, row: payload.row }
          } else {
            state.whiteposition.K = { col: newCol, row: newRow }
            this.commit('chess/checkornot', { color: 'black', checkking: true })

            if (!state.ischecked) {
              abletocapture.push({ col: newCol, row: newRow })
            }
          }
        }
      }
    }

    for (let i = 0; i < abletocapture.length; i++) {
      state.table[abletocapture[i].row][abletocapture[i].col].abletocapture = true
    }
    for (let i = 0; i < abletomove.length; i++) {
      state.table[abletomove[i].row][abletomove[i].col].abletomove = true
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
      //need to check if the king is checked

      //this.commit('chess/getPieceAtPosition',payload)

      if (!state.clicked) {
        //choose which piece to move
        this.commit('chess/getPieceAtPosition', {
          row: payload.row,
          col: payload.col,
          color: state.turn
        })

        console.log('choose piece ', state.choosepiece)
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
          const savedchoosepiece = state.choosepiece
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

              //get the piece that needed to be removed
              this.commit('chess/getPieceAtPosition', {
                row: payload.row,
                col: payload.col,
                color: 'black'
              })
              state.blackposition[state.choosepiece] = { row: 'x', col: 'x' }
            } else {
              const pieceIndex = state.whitePieces.findIndex(
                (entry) => entry.piece === capturedPiece
              )
              state.whitePieces[pieceIndex].number -= 1
              this.commit('chess/countscore', 'white')

              //get the piece that needed to be removed
              this.commit('chess/getPieceAtPosition', {
                row: payload.row,
                col: payload.col,
                color: 'white'
              })
              state.whiteposition[state.choosepiece] = { row: 'x', col: 'x' }
            }
          } //update location in black/white position
          if (state.turn == 'white') {
            state.whiteposition[savedchoosepiece] = { row: payload.row, col: payload.col }
          } else {
            state.blackposition[savedchoosepiece] = { row: payload.row, col: payload.col }
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
          //console.log(state.whiteposition, state.blackposition)

          this.commit('chess/checkornot', { color: state.turn, checkking: false })

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
