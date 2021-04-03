class Game {
  constructor() {
    this.currentplayer = 'o';
    this.grid = ['', '', '', '', '', '', '', '', ''];
    this.addCellEventListeners();
    this.renderGrid();
  }

  playRound(cellIndex) {
    if (this.grid[cellIndex] != '') return;

    this.grid[cellIndex] = this.currentplayer;
    if (this.currentplayer === 'o') {
      this.currentplayer = 'x';
    } else {
      this.currentplayer = 'o';
    }
    this.renderGrid();
  }

  renderGrid() {
    this.grid.forEach((cell, index) => {
      let cellHTML = document.getElementById(`cell-${index}`);
      cellHTML.innerText = cell;
    });
    this.renderCurrentPlayer();
  }

  addCellEventListeners() {
    this.grid.forEach((cell, index) => {
      let cellHTML = document.getElementById(`cell-${index}`);
      cellHTML.addEventListener('click', () => {
        this.playRound(index);
      });
    });
  }

  renderCurrentPlayer() {
    const currentPlayerHTML = document.getElementById('currentPlayer');
    currentPlayerHTML.innerHTML = `Current Player: ${this.currentplayer}`;
  }
}

const game = new Game();
