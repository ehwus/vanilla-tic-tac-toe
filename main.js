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

    if (this._winner === 'draw') {
      currentStatusHTML.innerHTML = "It's a draw! Reset to play again!";
    } else if (this._winner) {
      currentStatusHTML.innerHTML = `Winner: ${this._winner}! Reset to play again!`;
    } else {
      currentStatusHTML.innerHTML = `Current Player: ${this.currentplayer}`;
    }
  }

  _checkForWinner() {
    const grid = this._grid;

    // check rows
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

    if (grid[6] === grid[7] && grid[7] === grid[8]) {
      if (grid[6] != '' && grid[7] != '' && grid[8] != '') {
        this._winner = grid[6];
        this._renderCurrentStatus();
        return;
      }
    }

    // check columns
    if (grid[0] === grid[3] && grid[3] === grid[6]) {
      if (grid[0] != '' && grid[3] != '' && grid[6] != '') {
        this._winner = grid[0];
        this._renderCurrentStatus();
        return;
      }
    }

    if (grid[1] === grid[4] && grid[4] === grid[7]) {
      if (grid[1] != '' && grid[4] != '' && grid[7] != '') {
        this._winner = grid[1];
        this._renderCurrentStatus();
        return;
      }
    }

    if (grid[2] === grid[5] && grid[5] === grid[8]) {
      if (grid[2] != '' && grid[5] != '' && grid[8] != '') {
        this._winner = grid[2];
        this._renderCurrentStatus();
        return;
      }
    }

    // check diagonals
    if (grid[0] === grid[4] && grid[4] === grid[8]) {
      if (grid[0] != '' && grid[4] != '' && grid[8] != '') {
        this._winner = grid[0];
        this._renderCurrentStatus();
        return;
      }
    }

    if (grid[2] === grid[4] && grid[4] === grid[6]) {
      if (grid[2] != '' && grid[4] != '' && grid[6] != '') {
        this._winner = grid[2];
        this._renderCurrentStatus();
        return;
      }
    }

    // check for draw
    if (grid.every((cell) => cell === 'O' || cell === 'X')) {
      this._winner = 'draw';
      this._renderCurrentStatus();
      return;
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
