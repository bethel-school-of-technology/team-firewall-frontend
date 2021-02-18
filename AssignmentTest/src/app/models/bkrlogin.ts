export class Bkrlogin {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    AdminStatus: boolean;
    BankerId!: number;

    constructor() {
        this.FirstName = "";
        this.LastName = "";
        this.Email = "";
        this.Password = "";
        this.AdminStatus  = false;
    }
}
