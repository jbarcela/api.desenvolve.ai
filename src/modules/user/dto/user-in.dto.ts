import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserInDto {

  @IsNotEmpty()
  private _name: string;

  @IsEmail()
  private _email: string;

  @IsNotEmpty()
  private _password: string;

  @IsNotEmpty()
  private _username: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }
}
