import { DioAccount } from "./DioAccount"

export class StudentAccount extends DioAccount {

  constructor(studentName: string, accountNumber: number) {
    super(studentName, accountNumber)
  }

  public deposit(valor: number): void {
    super.deposit(valor + 10)
  }
}