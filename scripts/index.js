
const printScoreBoard = function () {
  const numbers = [];
  const scoreBoardSection = document.getElementById('scoreboard');

  for (let i = 1; i <= 76; i++) {
    numbers.push(i)
    const numberCell = document.createElement('div');

    numberCell.classList.add('cell');

    const cellValue = document.createElement('h3');
    cellValue.classList.add('cell-value');
    cellValue.innerText = i; 

    
    numberCell.appendChild(cellValue);
    
    scoreBoardSection.appendChild(numberCell);
  }
};

const button = document.getElementById('extract-btn');
button.classList.add('extract-btn');

button.addEventListener('click', function () {
  const spanToReplace = document.getElementById('number-container');
  let newNumber = Math.ceil(Math.random() * 76);
  spanToReplace.innerText ='Numero Estratto: ' + newNumber;
  
  const cellValues = document.querySelectorAll('#scoreboard div h3')
  const cells = document.querySelectorAll('#scoreboard div')
  for (let i=1; i<=76; i++) {
      if(parseInt(cellValues[i].innerText) === newNumber)
        cells[i].classList.add('extracted')
  }
});

printScoreBoard()




