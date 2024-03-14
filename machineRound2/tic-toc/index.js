const grid = document.getElementById('grid');

class TicToc {
    constructor(root, gridSize = 3){
        this.root = root;
        this.gridSize = 3;
        this.grid = [];
        this.drawGameBoard();
        this.addEventOnGrid();
        this.currentPlayer = 'X';
    }

    
    drawGameBoard(){
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < this.gridSize; i++) {
            const row = document.createElement('div');
            row.classList.add('row-grid')
            for (let j = 0; j < this.gridSize; j++) {
                const cell = document.createElement('div');
                cell.classList.add('play');
                cell.dataset.x = i;
                cell.dataset.y = j;
                row.appendChild(cell);
            }
            fragment.appendChild(row);
        }
        this.root.appendChild(fragment);
        this.drawGrid();
    }
    
    drawGrid(){
        const elements = this.root.children;
        console.log(elements);
        for (let i = 0; i < this.gridSize; i++) {
            this.grid[i] = Array.from(elements[i].children);
        }
        console.log(this.grid);
    }
    addEventOnGrid(){
        this.root.addEventListener('click', (e)=> {
            e.target.innerText = this.currentPlayer;
            this.currentPlayer = this.currentPlayer == 'X' ? 'Y' : 'X';
            this.checkDiagonal('X')
        })
    }

    checkDiagonal(){
        const val = this.grid[0][0].textContent;
        
    }
}

const ticToc = new TicToc(grid);