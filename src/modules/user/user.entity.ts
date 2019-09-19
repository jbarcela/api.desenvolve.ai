import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'users'})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    public name: string;

    @Column()
    public email: string;

    @Column()
    public password: string;

    @Column('int')
    public points: number;

    @Column('int')
    public receivedPoints: number;

    constructor(name: string, email: string, password: string, points: number, receivedPoints: number) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.points = points;
        this.receivedPoints = receivedPoints;
    }
}
