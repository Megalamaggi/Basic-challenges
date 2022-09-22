const{map} = require('@laufire/utils/collection')

const accounts = [
    {
      name: 'Babu',
      accountNo: 2,
    },
    {
      name: 'Chandra',
      accountNo: 3,
    },
    {
      name: 'Arun',
      accountNo: 1,
    },
  ];
  const balances = {
    //accountNo: balance
    '1': 5000,
    '2': 2000,
    '3': 0,
  };
  const transactions = [
    {
      accountNo: 1,
      type: 'withdrawal',
      amount: 1000,
    },
    {
      accountNo: 1,
      type: 'deposit',
      amount: 500,
    },
    {
      accountNo: 1,
      type: 'withdrawal',
      amount: 1000,
    },
    {
      accountNo: 2,
      type: 'deposit',
      amount: 300,
    },
    {
      accountNo: 2,
      type: 'withdrawal',
      amount: 200,
    },
    {
      accountNo: 2,
      type: 'deposit',
      amount: 200,
    },
  ];

 

  const accBalance = (item) => 
  ({
    name:item.name,
    accountNo:item.accountNo,
    balances:balances[item.accountNo]
  });
  


  const balanceDetail = () => map(accounts,(accBalance));
   
 

  const updateTranscation = (transaction) => 
    transaction.type === 'deposit'
    ? balances[transaction.accountNo] += transaction.amount 
      : balances[transaction.accountNo] -= transaction.amount;  
    
  
  const updateTransactions = () => map(transactions,(updateTranscation));
     

  const main = () => {
        console.log("Balances before transaction:");
        console.table(balanceDetail());
        console.log("Balances after transaction:");
        updateTransactions();
        console.table(balanceDetail());
    }
main();

