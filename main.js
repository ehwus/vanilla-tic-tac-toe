class Game {
  constructor() {
    this.currentplayer = 'O';
  }

  renderCurrentPlayer() {
    const currentPlayerHTML = document.getElementById('currentPlayer');
    currentPlayerHTML.innerHTML = `Current Player: ${this.currentplayer}`;
  }
}

const game = new Game();
game.renderCurrentPlayer();
