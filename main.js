class Game {
  constructor() {
    this.currentplayer = 'o';
    this.grid = ['', '', '', '', '', '', '', '', ''];
    this._addCellEventListeners();
    this._renderGrid();
    this._winner = false;
  }

  playRound(cellIndex) {
    if (this.grid[cellIndex] != '') return;
    if (this._winner) return;

    this.grid[cellIndex] = this.currentplayer;
    if (this.currentplayer === 'o') {
      this.currentplayer = 'x';
    } else {
      this.currentplayer = 'o';
    }
    this._renderGrid();
  }

  _renderGrid() {
    this.grid.forEach((cell, index) => {
      let cellHTML = document.getElementById(`cell-${index}`);
      cellHTML.innerText = cell;
    });
    this._renderCurrentPlayer();
  }

  _addCellEventListeners() {
    this.grid.forEach((cell, index) => {
      let cellHTML = document.getElementById(`cell-${index}`);
      cellHTML.addEventListener('click', () => {
        this.playRound(index);
      });
    });
  }

  _renderCurrentPlayer() {
    const currentPlayerHTML = document.getElementById('currentPlayer');
    currentPlayerHTML.innerHTML = `Current Player: ${this.currentplayer}`;
  }
}

const game = new Game();
