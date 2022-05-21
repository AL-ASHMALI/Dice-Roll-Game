var rolls, numbers, total;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function game() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total = document.getElementById('total');
  rolls.unshift(randomMember(numbers));
  total = rolls.reduce((a,b) => a+b, 0);
  element_total.innerText = total;
}

// Describe this function...
function showResult() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (total == 11) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'You Win!!!';
  }
  if (total < 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'Keep Playing!!';
  }
  if (total > 11) {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'You Lost!';
  }
}


numbers = [1, 2, 3, 4, 5, 6];

rolls = [];


document.getElementById('button_roll').addEventListener('click', (event) => {
  game();
  showResult();
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = rolls;

  element_list.appendChild(new_li);

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  let element_total2 = document.getElementById('total');
  rolls.shift();
  total = rolls.reduce((a,b) => a+b, 0);
  element_total2.innerText = total;
  showResult();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [null, null, null];
  total = 0;
  let element_total3 = document.getElementById('total');
  element_total3.innerText = total;
  let element_info4 = document.getElementById('info');
  element_info4.innerText = 'Keep Playing';
  let element_list2 = document.getElementById('list');
  element_list2.replaceChildren();

});