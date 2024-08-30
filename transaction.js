document.addEventListener("DOMContentLoaded", function() {
    const julyTransactions = [
        { date: "2024-07-24", description: "Money Deposited for initial funding", amount: 1000, type: "Deposit" },
        { date: "2024-07-25", description: "Money Received for completion of tasks", amount: 5000, type: "Received" }
    ];

    const augustTransactions = [
        { date: "2024-08-01", description: "Money Deposited for additional funding", amount: 5000, type: "Deposit" },
        { date: "2024-08-05", description: "Money Received for completion of tasks", amount: 25000, type: "Received" },
        { date: "2024-08-10", description: "Money Deposited for additional funding", amount: 500, type: "Deposit" },
        { date: "2024-08-15", description: "Money Received for completion of tasks", amount: 1000, type: "Received" }
    ];

    const julyTransactionList = document.querySelector("#july-transaction-list");
    const augustTransactionList = document.querySelector("#august-transaction-list");

    julyTransactions.forEach(transaction => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <div class="transaction-info">
                <div class="description">${transaction.description}</div>
                <div class="date">${transaction.date}</div>
            </div>
            <div class="transaction-amount ${transaction.type.toLowerCase()}">$${transaction.amount}</div>
        `;

        julyTransactionList.appendChild(listItem);
    });

    augustTransactions.forEach(transaction => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <div class="transaction-info">
                <div class="description">${transaction.description}</div>
                <div class="date">${transaction.date}</div>
            </div>
            <div class="transaction-amount ${transaction.type.toLowerCase()}">$${transaction.amount}</div>
        `;

        augustTransactionList.appendChild(listItem);
    });
});

