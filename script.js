'use strict'

const btnReset = document.querySelector('.btn-reset');
const btnAgain = document.querySelector('.btn-again');
const playerScore1 = document.querySelector('.score0');
const playerScore2 = document.querySelector('.score1');
const player1El = document.querySelector('.player-1');
const player2El = document.querySelector('.player-2');
const cellEl0 = document.querySelector('.cell-0');
const cellEl1 = document.querySelector('.cell-1');
const cellEl2 = document.querySelector('.cell-2');
const cellEl3 = document.querySelector('.cell-3');
const cellEl4 = document.querySelector('.cell-4');
const cellEl5 = document.querySelector('.cell-5');
const cellEl6 = document.querySelector('.cell-6');
const cellEl7 = document.querySelector('.cell-7');
const cellEl8 = document.querySelector('.cell-8');
const imgEl0 = document.querySelector('.img-0');
const imgEl1 = document.querySelector('.img-1');
const imgEl2 = document.querySelector('.img-2');
const imgEl3 = document.querySelector('.img-3');
const imgEl4 = document.querySelector('.img-4');
const imgEl5 = document.querySelector('.img-5');
const imgEl6 = document.querySelector('.img-6');
const imgEl7 = document.querySelector('.img-7');
const imgEl8 = document.querySelector('.img-8');

let activePlayer, cells, playing, moves;
const init = function () {
    cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    activePlayer = 0;
    moves=0;
    playing = true;

    player1El.classList.add('active');
    player2El.classList.remove('active');

    imgEl0.src = "images/White.png";
    imgEl1.src = "images/White.png";
    imgEl2.src = "images/White.png";
    imgEl3.src = "images/White.png";
    imgEl4.src = "images/White.png";
    imgEl5.src = "images/White.png";
    imgEl6.src = "images/White.png";
    imgEl7.src = "images/White.png";
    imgEl8.src = "images/White.png";

    cellEl0.style.backgroundColor = '#f0ebe3';
    cellEl1.style.backgroundColor = '#f0ebe3';
    cellEl2.style.backgroundColor = '#f0ebe3';
    cellEl3.style.backgroundColor = '#f0ebe3';
    cellEl4.style.backgroundColor = '#f0ebe3';
    cellEl5.style.backgroundColor = '#f0ebe3';
    cellEl6.style.backgroundColor = '#f0ebe3';
    cellEl7.style.backgroundColor = '#f0ebe3';
    cellEl8.style.backgroundColor = '#f0ebe3';
}
const resetGame = function () {
    playerScore1.textContent = 0;
    playerScore2.textContent = 0;
}

init();
resetGame();

const check = function () {
    if (cells[0] === cells[1] && cells[1] === cells[2] && cells[0] !== 0) {
        cellEl0.style.backgroundColor = '#53bf9d';
        cellEl1.style.backgroundColor = '#53bf9d';
        cellEl2.style.backgroundColor = '#53bf9d';
        return cells[0];
    }
    else if (cells[3] === cells[4] && cells[4] === cells[5] && cells[3] !== 0) {
        cellEl3.style.backgroundColor = '#53bf9d';
        cellEl4.style.backgroundColor = '#53bf9d';
        cellEl5.style.backgroundColor = '#53bf9d';
        return cells[3];
    }
    else if (cells[6] === cells[7] && cells[7] === cells[8] && cells[6] !== 0) {
        cellEl6.style.backgroundColor = '#53bf9d';
        cellEl7.style.backgroundColor = '#53bf9d';
        cellEl8.style.backgroundColor = '#53bf9d';
        return cells[6];
    }
    else if (cells[0] === cells[3] && cells[3] === cells[6] && cells[0] !== 0) {
        cellEl0.style.backgroundColor = '#53bf9d';
        cellEl3.style.backgroundColor = '#53bf9d';
        cellEl6.style.backgroundColor = '#53bf9d';
        return cells[0];
    }
    else if (cells[1] === cells[4] && cells[4] === cells[7] && cells[1] !== 0) {
        cellEl1.style.backgroundColor = '#53bf9d';
        cellEl4.style.backgroundColor = '#53bf9d';
        cellEl7.style.backgroundColor = '#53bf9d';
        return cells[1];
    }
    else if (cells[2] === cells[5] && cells[5] === cells[8] && cells[2] !== 0) {
        cellEl2.style.backgroundColor = '#53bf9d';
        cellEl5.style.backgroundColor = '#53bf9d';
        cellEl8.style.backgroundColor = '#53bf9d';
        return cells[2];
    }
    else if (cells[0] === cells[4] && cells[4] === cells[8] && cells[0] !== 0) {
        cellEl0.style.backgroundColor = '#53bf9d';
        cellEl4.style.backgroundColor = '#53bf9d';
        cellEl8.style.backgroundColor = '#53bf9d';
        return cells[0];
    }
    else if (cells[2] === cells[4] && cells[4] === cells[6] && cells[2] !== 0) {
        cellEl2.style.backgroundColor = '#53bf9d';
        cellEl4.style.backgroundColor = '#53bf9d';
        cellEl6.style.backgroundColor = '#53bf9d';
        return cells[2];
    }
    else {
        return 0;
    }
}

cellEl0.addEventListener('click', function () {
    if (playing) {
        moves++;
        if (cells[0] === 0) {
            if (activePlayer === 0) {
                cells[0] = 1;
                imgEl0.src = "images/cross.png";
                activePlayer = 1;
                player1El.classList.remove('active');
                player2El.classList.add('active');
                const winner = check();
                if (winner === 1) {
                    playerScore1.textContent++;
                    alert('Player-1 Won');
                    playing = false;
                }
            }
            else {
                cells[0] = 2;
                imgEl0.src = "images/circle.png";
                activePlayer = 0;
                player1El.classList.add('active');
                player2El.classList.remove('active');
                const winner = check();
                if (winner === 2) {
                    playerScore2.textContent++;
                    alert('Player-2 Won');
                    playing = false;
                }
            }
        }
        if(moves===9 && playing)
        alert('Draw');
    }
})
cellEl1.addEventListener('click', function () {
    if (playing) {
        moves++;
        if (cells[1] === 0) {
            if (activePlayer === 0) {
                cells[1] = 1;
                imgEl1.src = "images/cross.png";
                activePlayer = 1;
                player1El.classList.remove('active');
                player2El.classList.add('active');
                const winner = check();
                if (winner === 1) {
                    playerScore1.textContent++;
                    alert('Player-1 Won');
                    playing = false;
                }
            }
            else {
                cells[1] = 2;
                imgEl1.src = "images/circle.png";
                activePlayer = 0;
                player1El.classList.add('active');
                player2El.classList.remove('active');
                const winner = check();
                if (winner === 2) {
                    playerScore2.textContent++;
                    alert('Player-2 Won');
                    playing = false;
                }
            }
        }
        if(moves===9 && playing)
        alert('Draw');
    }
})
cellEl2.addEventListener('click', function () {
    if (playing) {
        moves++;
        if (cells[2] === 0) {
            if (activePlayer === 0) {
                cells[2] = 1;
                imgEl2.src = "images/cross.png";
                activePlayer = 1;
                player1El.classList.remove('active');
                player2El.classList.add('active');
                const winner = check();
                if (winner === 1) {
                    playerScore1.textContent++;
                    alert('Player-1 Won');
                    playing = false;
                }
            }
            else {
                cells[2] = 2;
                imgEl2.src = "images/circle.png";
                activePlayer = 0;
                player1El.classList.add('active');
                player2El.classList.remove('active');
                const winner = check();
                if (winner === 2) {
                    playerScore2.textContent++;
                    alert('Player-2 Won');
                    playing = false;
                }
            }
        }
        if(moves===9 && playing)
        alert('Draw');
    }
})
cellEl3.addEventListener('click', function () {
    if (playing) {
        moves++;
        if (cells[3] === 0) {
            if (activePlayer === 0) {
                cells[3] = 1;
                imgEl3.src = "images/cross.png";
                activePlayer = 1;
                player1El.classList.remove('active');
                player2El.classList.add('active');
                const winner = check();
                if (winner === 1) {
                    playerScore1.textContent++;
                    alert('Player-1 Won');
                    playing = false;
                }
            }
            else {
                cells[3] = 2;
                imgEl3.src = "images/circle.png";
                activePlayer = 0;
                player1El.classList.add('active');
                player2El.classList.remove('active');
                const winner = check();
                if (winner === 2) {
                    playerScore2.textContent++;
                    alert('Player-2 Won');
                    playing = false;
                }
            }
        }
        if(moves===9 && playing)
        alert('Draw');
    }
})
cellEl4.addEventListener('click', function () {
    if (playing) {
        moves++;
        if (cells[4] === 0) {
            if (activePlayer === 0) {
                cells[4] = 1;
                imgEl4.src = "images/cross.png";
                activePlayer = 1;
                player1El.classList.remove('active');
                player2El.classList.add('active');
                const winner = check();
                if (winner === 1) {
                    playerScore1.textContent++;
                    alert('Player-1 Won');
                    playing = false;
                }
            }
            else {
                cells[4] = 2;
                imgEl4.src = "images/circle.png";
                activePlayer = 0;
                player1El.classList.add('active');
                player2El.classList.remove('active');
                const winner = check();
                if (winner === 2) {
                    playerScore2.textContent++;
                    alert('Player-2 Won');
                    playing = false;
                }
            }
        }
        if(moves===9 && playing)
        alert('Draw');
    }
})
cellEl5.addEventListener('click', function () {
    if (playing) {
        moves++;
        if (cells[5] === 0) {
            if (activePlayer === 0) {
                cells[5] = 1;
                imgEl5.src = "images/cross.png";
                activePlayer = 1;
                player1El.classList.remove('active');
                player2El.classList.add('active');
                const winner = check();
                if (winner === 1) {
                    playerScore1.textContent++;
                    alert('Player-1 Won');
                    playing = false;
                }
            }
            else {
                cells[5] = 2;
                imgEl5.src = "images/circle.png";
                activePlayer = 0;
                player1El.classList.add('active');
                player2El.classList.remove('active');
                const winner = check();
                if (winner === 2) {
                    playerScore2.textContent++;
                    alert('Player-2 Won');
                    playing = false;
                }
            }
        }
        if(moves===9 && playing)
        alert('Draw');
    }
})
cellEl6.addEventListener('click', function () {
    if (playing) {
        moves++;
        if (cells[6] === 0) {
            if (activePlayer === 0) {
                cells[6] = 1;
                imgEl6.src = "images/cross.png";
                activePlayer = 1;
                player1El.classList.remove('active');
                player2El.classList.add('active');
                const winner = check();
                if (winner === 1) {
                    playerScore1.textContent++;
                    alert('Player-1 Won');
                    playing = false;
                }
            }
            else {
                cells[6] = 2;
                imgEl6.src = "images/circle.png";
                activePlayer = 0;
                player1El.classList.add('active');
                player2El.classList.remove('active');
                const winner = check();
                if (winner === 2) {
                    playerScore2.textContent++;
                    alert('Player-2 Won');
                    playing = false;
                }
            }
        }
        if(moves===9 && playing)
        alert('Draw');
    }
})
cellEl7.addEventListener('click', function () {
    if (playing) {
        moves++;
        if (cells[7] === 0) {
            if (activePlayer === 0) {
                cells[7] = 1;
                imgEl7.src = "images/cross.png";
                activePlayer = 1;
                player1El.classList.remove('active');
                player2El.classList.add('active');
                const winner = check();
                if (winner === 1) {
                    playerScore1.textContent++;
                    alert('Player-1 Won');
                    playing = false;
                }
            }
            else {
                cells[7] = 2;
                imgEl7.src = "images/circle.png";
                activePlayer = 0;
                player1El.classList.add('active');
                player2El.classList.remove('active');
                const winner = check();
                if (winner === 2) {
                    playerScore2.textContent++;
                    alert('Player-2 Won');
                    playing = false;
                }
            }
        }
        if(moves===9 && playing)
        alert('Draw');
    }
})
cellEl8.addEventListener('click', function () {
    if (playing) {
        moves++;
        if (cells[8] === 0) {
            if (activePlayer === 0) {
                cells[8] = 1;
                imgEl8.src = "images/cross.png";
                activePlayer = 1;
                player1El.classList.remove('active');
                player2El.classList.add('active');
                const winner = check();
                if (winner === 1) {
                    playerScore1.textContent++;
                    alert('Player-1 Won');
                    playing = false;
                }
            }
            else {
                cells[8] = 2;
                imgEl8.src = "images/circle.png";
                activePlayer = 0;
                player1El.classList.add('active');
                player2El.classList.remove('active');
                const winner = check();
                if (winner === 2) {
                    playerScore2.textContent++;
                    alert('Player-2 Won');
                    playing = false;
                }
            }
        }
        if(moves===9 && playing)
        alert('Draw');
    }
})

btnAgain.addEventListener('click', init)
btnReset.addEventListener('click', function(){
    init();
    resetGame();
})
