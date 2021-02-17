export class Banker {
    FirstName: string;
    LastName: string;
    Password: string;
    Email: string;
    BankerId!: number;
    AdminStatus: boolean;
    BankId!: number;

    constructor() {
        this.FirstName = "";
        this.LastName = "";
        this.Email = "";
        this.Password = "";
        this.AdminStatus  = false;
    }
}
