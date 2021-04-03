class Game {
  constructor() {
    this._startGame();
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

  reset() {
    if (window.confirm('Are you sure you want to reset?')) {
      this._startGame();
    }
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

  _checkForWinner() {}

  _startGame() {
    this.currentplayer = 'o';
    this.grid = ['', '', '', '', '', '', '', '', ''];
    this._addCellEventListeners();
    this._renderGrid();
    this._winner = false;
  }
}

const game = new Game();
