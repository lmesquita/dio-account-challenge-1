export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    console.log(this.name);
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log('Voce depositou R$' + value);
    }
  }

  withdraw = (value: number): void => {
    if (this.balance > value && this.validateStatus()) {
      this.balance -= value;
      console.log('Voce sacou R$' + value);
    } else {
      throw new Error('Saldo insuficiente');
    }
  }

  getBalance = (): number => {
    console.log(this.balance)
    return this.balance;
  }

  setBalance = (value: number): void => {
    this.balance = value;
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  getStatus = (): boolean => {
    console.log(this.status);    
    return this.status;
  }
}
