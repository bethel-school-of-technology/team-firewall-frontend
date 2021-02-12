export class Admin {
    FirstName: string;
    LastName: string;
    Password: string;
    AdminId!: number;
    AdminStatus: boolean;
    Email: string

    constructor() {
        this.FirstName = " ";
        this.LastName = " ";
        this.Email = " ";
        this.Password = " ";
        this.AdminStatus  = true;
    }
}
