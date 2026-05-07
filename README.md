# BANK ACCOUNT MANAGEMENT

A simple JavaScript bank account management project that provides deposit, withdrawal, balance checking, and transaction listing functionality.

## Files

- `script.js` - Contains the `BankAccount` class and example usage.

## Features

- Deposit funds into the account
- Withdraw funds from the account
- Check current balance
- List all deposits
- List all withdrawals

## Usage

1. Open `script.js` in a JavaScript environment.
2. Create a new account instance:

```js
const myAccount = new BankAccount();
```

3. Use the available methods:

```js
myAccount.deposit(5000);
myAccount.withdraw(100);
console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
```

## Notes

- Deposits must be greater than zero.
- Withdrawals must be greater than zero and cannot exceed the current balance.

## Example Output

```text
Successfully deposited $5000. New balance: $5000
Withdrawals: 100,40,10
```

## License

This project is provided as-is for learning and experimentation.
