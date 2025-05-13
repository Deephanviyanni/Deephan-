let balance = 0;
let transactionList = [];

function updateDisplay() {
  document.getElementById('balance').innerText = balance.toFixed(2);
  
  const list = document.getElementById('transactionList');
  list.innerHTML = '';
  transactionList.slice().reverse().forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

function deposit() {
  const amount = parseFloat(document.getElementById('amount').value);
  if (amount > 0) {
    balance += amount;
    transactionList.push(`Deposited ₹${amount.toFixed(2)}`);
    updateDisplay();
  } else {
    alert('Please enter a valid amount.');
  }
  document.getElementById('amount').value = '';
}

function withdraw() {
  const amount = parseFloat(document.getElementById('amount').value);
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    transactionList.push(`Withdrew ₹${amount.toFixed(2)}`);
    updateDisplay();
  } else {
    alert('Insufficient balance or invalid amount.');
  }
  document.getElementById('amount').value = '';
}

// Initialize display
updateDisplay();
