 // Define the symbols for the slot machine
 const symbols = ['🍒', '🍊', '🍋', '🍇', '🍉'];

 // Set the initial balance
 let balance = 100;

 // Get a random symbol from the array
 function getRandomSymbol() {
   const randomIndex = Math.floor(Math.random() * symbols.length);
   return symbols[randomIndex];
 }

 // Spin the slot machine
 function spin() {
   if (balance <= 0) {
     alert('Insufficient balance. Please add more funds.');
     return;
   }

   const slots = Array.from(document.querySelectorAll('.slot'));

   // Deduct the bet amount from the balance
   const betAmount = 10;
   balance -= betAmount;
   updateBalance();

   // Generate a random symbol for each slot
   slots.forEach(slot => {
     const symbol = getRandomSymbol();
     slot.textContent = symbol;
   });

   // Check if all symbols are the same
   const firstSymbol = slots[0].textContent;
   const isWin = slots.every(slot => slot.textContent === firstSymbol);

   // Display the result
   const resultElement = document.getElementById('result');
   if (isWin) {
     resultElement.textContent = 'You won!';
     balance += betAmount * 2;
   } else {
     resultElement.textContent = 'Try again!';
   }
   updateBalance();
 }

 // Update the balance display
 function updateBalance() {
   const balanceElement = document.getElementById('balance');
   balanceElement.textContent = `Balance: $${balance}`;
 }
  // Additional Feature: Display Bet Amount
  const betAmountElement = document.getElementById('bet-amount');
  let betAmount = 10;
  betAmountElement.textContent = `Bet Amount: $${betAmount}`;

  // Additional Feature: Increase/Decrease Bet Amount
  function increaseBet() {
    betAmount += 10;
    betAmountElement.textContent = `Bet Amount: $${betAmount}`;
  }

  function decreaseBet() {
    if (betAmount > 10) {
      betAmount -= 10;
      betAmountElement.textContent = `Bet Amount: $${betAmount}`;
    }
  }

  // Additional Feature: Update Balance and Bet Amount Displays
  function updateDisplays() {
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = `Balance: $${balance}`;
    betAmountElement.textContent = `Bet Amount: $${betAmount}`;
  }

  // Additional Feature: Reset Game
  function resetGame() {
    balance = 100;
    betAmount = 10;
    updateDisplays();
    document.getElementById('result').textContent = '';
    const slots = Array.from(document.querySelectorAll('.slot'));
    slots.forEach(slot => (slot.textContent = ''));
  }