export class UserOutDto {
    constructor(id: number, name: string, email: string, password: string, points: number, receivedPoints: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.points = points;
        this.receivedPoints = receivedPoints;
    }

    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public points: number;
    public receivedPoints: number;
}
