export class Bankers {
    FirstName: string;
    LastName: string;
    Password: string;
    Email: string;
    BankerId!: number;
    AdminStatus: boolean

    constructor() {
        this.FirstName = " ";
        this.LastName = " ";
        this.Email = " ";
        this.Password = " ";
        this.AdminStatus  = false;
    }
}
