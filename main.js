class Game {
  constructor() {
    this.currentplayer = 'O';
    this.grid = ['', '', '', '', '', '', '', '', ''];
  }

  renderCurrentPlayer() {
    const currentPlayerHTML = document.getElementById('currentPlayer');
    currentPlayerHTML.innerHTML = `Current Player: ${this.currentplayer}`;
  }

  renderGrid() {
    this.grid.forEach((cell, index) => {
      let cellHTML = document.getElementById(`cell-${index}`);
      cellHTML.innerText = cell;
    });
  }
}

const game = new Game();
game.renderCurrentPlayer();
game.renderGrid();
