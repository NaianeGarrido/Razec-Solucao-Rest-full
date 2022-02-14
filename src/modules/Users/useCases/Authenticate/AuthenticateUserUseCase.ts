import { inject, injectable } from "tsyringe"
import { IUserRepository } from "../../../Users/repositories/IUserRepository"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";

export type IRequestAuthenticate = {
  email: string;
  password: string;
};
@injectable()
class AuthenticateUserUseCase {
  constructor (
    @inject ("UserRepository") private userRepository: IUserRepository
    ){}

  async execute({email, password}: IRequestAuthenticate) {
    const user = await this.userRepository.getAuthenticateUser(email);

    if(!user) {
      throw new Error ("Email/Password incorrect");
    }
    const passwordMath = await compare(password, user.password);
    if (!passwordMath){
      throw new Error ("Email/Password incorrect");
    }

    const token = sign ({ email: user.email}, "e5f4117aaaebd85b0ee91c88e2ddd92a", { subject: user.id.toString(), expiresIn: "3d" });

    return token;
      }

}
  export { AuthenticateUserUseCase }