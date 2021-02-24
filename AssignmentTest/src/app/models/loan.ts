export class Loan {
    LoanId!: number;
    FirstName: string;
    LastName: string;
    Address: string;
    AccountNumber: number;
    LoanAmmount: number;
    Deleted: boolean;
    ForSale: boolean;
    BankId!: number;
    bank!: {Name: string};

    constructor() {
        this.FirstName = "";
        this.LastName = "";
        this.AccountNumber = 0;
        this.LoanAmmount = 0;
        this.Address = "";
        this.ForSale  = false;
        this.Deleted = false;
    }
}
