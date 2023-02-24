import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): number => {
    if (this.getStatus()) {
      const receiver = this.getBalance();
      this.setBalance(receiver + value);
      console.log('Voce pegou um empréstimo de R$' + value);
      return value;
    }

    throw new Error('Empréstimo negado');
  }
}
