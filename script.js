class BankAccount{
  constructor(){
    this.balance=0;
    this.transactions=[];  
  }
  deposit(depositAmount){
    if(depositAmount>0){
      this.transactions.push({
      type:"deposit",
      amount:depositAmount
    });
    this.balance+=depositAmount;
    return `Successfully deposited $${depositAmount}. New balance: $${this.balance}`
    }
    if(depositAmount<=0){
      return `Deposit amount must be greater than zero.`
    }
    
    
  }
  withdraw(withdrawalAmount){
    if(withdrawalAmount>0 && withdrawalAmount<=this.balance){
      this.transactions.push({
      type:"withdraw",
      amount:withdrawalAmount
    });
    this.balance-=withdrawalAmount;
    return `Successfully withdrew $${withdrawalAmount}. New balance: $${this.balance}`
    };
    if(withdrawalAmount<=0 || withdrawalAmount>this.balance){
      return `Insufficient balance or invalid amount.`
    }
    
  }
  checkBalance(){
    return `Current balance: $${this.balance}`
  }
  listAllDeposits(){
    let deposits=[]
    for(let transaction of this.transactions){
      if(transaction.type==="deposit"){
        deposits.push(transaction.amount);
      }
    }
    return `Deposits: `+deposits.join(",");
  }
  listAllWithdrawals(){
    let withdrawals=[]
    for(let transaction of this.transactions){
      if(transaction.type==="withdraw"){
        withdrawals.push(transaction.amount);
      }
    }
    return `Withdrawals: `+withdrawals.join(",");
  }
}
const myAccount = new BankAccount();
console.log(myAccount.deposit(5000));
myAccount.deposit(4000);
myAccount.withdraw(100);
myAccount.withdraw(40);
myAccount.withdraw(10);
console.log(myAccount.listAllWithdrawals())