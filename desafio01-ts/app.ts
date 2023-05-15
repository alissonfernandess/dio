import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(20)
peopleAccount.withdraw(10)
peopleAccount.getBalance()
peopleAccount.getName()
console.log(peopleAccount)


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
companyAccount.withdraw(35)
companyAccount.getBalance()
companyAccount.getBalance()
companyAccount.getLoan(10)
console.log(companyAccount);



const studentAccount: StudentAccount = new StudentAccount('Nadilson', 100)
studentAccount.deposit(70)
studentAccount.withdraw(30)
studentAccount.getBalance()
studentAccount.getName()
console.log(studentAccount)


const studentAccount2: StudentAccount = new StudentAccount('Nadilson José', 101)
studentAccount2.deposit(70)
studentAccount2.withdraw(100)
studentAccount2.getBalance()
studentAccount2.getName()
console.log(studentAccount2)