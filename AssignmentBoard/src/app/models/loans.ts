import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Loans {
    FirstName: string;
    LastName: string;
    LoanAmount: number;
    Address: string;
    LoanId!: number;
    AccountNumber:string;
    BankId!: foreignType ;
    ForSale: Boolean;

    constructor() { 
    this.FirstName = "";
    this.LastName = "";
    this.LoanAmount = ;
    this.Address = "";
    this.AccountNumber ="";
    this.ForSale= true,false;

    }
}