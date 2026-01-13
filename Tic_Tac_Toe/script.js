const gameStatus = document.getElementById('gameStatus');
const gameReset = document.getElementById('gameReset');
const gameCells = document.querySelectorAll('.cell');

let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""]; // Tracks the board state
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]; // All possible winning combinations

// Messages
const winMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's Player ${currentPlayer}'s turn`;

// Handle cell clicks
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

// Update game state and UI after a move
function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerText = currentPlayer;
}

// Check for win or draw conditions
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let pos1 = gameState[winCondition[0]];
        let pos2 = gameState[winCondition[1]];
        let pos3 = gameState[winCondition[2]];

        if (pos1 === "" || pos2 === "" || pos3 === "") {
            continue;
        }
        if (pos1 === pos2 && pos2 === pos3) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        gameStatus.innerText = winMessage();
        gameActive = false;
        return;
    }

    // Check for a draw (if all cells are filled and no one won)
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        gameStatus.innerText = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

// Switch player turns
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameStatus.innerText = currentPlayerTurn();
}

// Reset the game board and state
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameStatus.innerText = currentPlayerTurn();
    gameCells.forEach(cell => cell.innerText = "");
}

// Event listeners
gameCells.forEach(cell => cell.addEventListener('click', handleCellClick));
gameReset.addEventListener('click', handleRestartGame);
