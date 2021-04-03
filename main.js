class Game {
  constructor() {
    this._startGame();
  }

  playRound(cellIndex) {
    if (this._grid[cellIndex] != '') return;
    if (this._winner) return;

    this._grid[cellIndex] = this.currentplayer;
    if (this.currentplayer === 'O') {
      this.currentplayer = 'X';
    } else {
      this.currentplayer = 'O';
    }
    this._renderGrid();
    this._checkForWinner();
  }

  reset() {
    if (window.confirm('Are you sure you want to reset?')) {
      this._startGame();
    }
  }

  _renderGrid() {
    this._grid.forEach((cell, index) => {
      let cellHTML = document.getElementById(`cell-${index}`);
      cellHTML.innerText = cell;
    });
    this._renderCurrentStatus();
  }

  _addCellEventListeners() {
    this._grid.forEach((cell, index) => {
      let cellHTML = document.getElementById(`cell-${index}`);
      cellHTML.addEventListener('click', () => {
        this.playRound(index);
      });
    });
  }

  _renderCurrentStatus() {
    const currentStatusHTML = document.getElementById('currentStatus');

    if (this._winner) {
      currentStatusHTML.innerHTML = `Winner: ${this._winner}! Reset to play again!`;
    } else {
      currentStatusHTML.innerHTML = `Current Player: ${this.currentplayer}`;
    }
  }

  _checkForWinner() {
    const grid = this._grid;
    if (grid[0] === grid[1] && grid[1] === grid[2]) {
      if (grid[0] != '' && grid[1] != '' && grid[2] != '') {
        this._winner = grid[0];
        this._renderCurrentStatus();
        return;
      }
    }
    if (grid[3] === grid[4] && grid[4] === grid[5]) {
      if (grid[3] != '' && grid[4] != '' && grid[5] != '') {
        this._winner = grid[3];
        this._renderCurrentStatus();
        return;
      }
    }
  }

  _startGame() {
    this.currentplayer = 'O';
    this._grid = ['', '', '', '', '', '', '', '', ''];
    this._addCellEventListeners();
    this._renderGrid();
    this._winner = false;
  }
}

const game = new Game();
