export class Admin {
    AdminId!: number;
    FirstName: string;
    LastName: string;
    Password: string;
    AdminStatus: boolean;
    Email: string;

    constructor() {
        this.FirstName = "";
        this.LastName = "";
        this.Email = "";
        this.Password = "";
        this.AdminStatus  = true;
    }
}
