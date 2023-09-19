const chessboard = document.getElementById('chessboard');
chessboard.classList.add('flex-display');
// const boardSize = Math.min(window.innerWidth , window.innerHeight - 50) - 50;
// chessboard.style.height = boardSize;
// chessboard.style.width = boardSize;
const rows = 8;
const fragmentElement = document.createDocumentFragment();
class Board {
    constructor(){
        this.col = rows;
        this.rows = rows;
    }

    createBoard(){
        console.log('board created');
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('border-class');
        for (let i = 0; i < this.rows; i++) {
            let toggleColor = true;
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('flex-display');
            for (let j = 0; j < this.col; j++) {
                let rowDivElement = document.createElement('div');
                rowDivElement.dataset.x = i;
                rowDivElement.dataset.y = j;
                rowDivElement.classList.add('box');
                if(toggleColor){
                    rowDivElement.classList.add('true-color');
                }else{
                    rowDivElement.classList.add('false-color');
                }
                toggleColor = !toggleColor;
                rowDiv.appendChild(rowDivElement);
            }
            mainDiv.appendChild(rowDiv);
        }
        fragmentElement.appendChild(mainDiv);
        chessboard.append(fragmentElement);

    }
}

const boardClass = new Board();

boardClass.createBoard();