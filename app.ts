import { CompanyAccount } from './class/CompanyAccount'
import { DepositAccount } from './class/DepositAccount';
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount);
peopleAccount.deposit(100)
console.log(peopleAccount);
peopleAccount.withdraw(50);
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount);
companyAccount.deposit(500);
console.log(companyAccount);
companyAccount.getLoan(1000);
console.log(companyAccount);
companyAccount.withdraw(700);
console.log(companyAccount);

const depositAccount: DepositAccount = new DepositAccount('João', 30);
console.log(depositAccount);
depositAccount.deposit(200);
console.log(depositAccount);
