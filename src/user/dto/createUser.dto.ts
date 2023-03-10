import { IsEmail, IsNotEmpty } from "class-validator";

export default class CreateUserDto {
    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;
}