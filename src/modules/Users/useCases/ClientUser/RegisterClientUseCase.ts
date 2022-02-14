import { inject, injectable } from "tsyringe"
import { IUserRepository } from "../../repositories/IUserRepository"

export type IRequestRegisterClient = {
  name: string;
  email: string;
  phoneNumber: string;
}

@injectable()
class RegisterClientUseCase {
constructor(@inject("UserRepository") private userRepository: IUserRepository) {}

  async execute({name, email, phoneNumber}:IRequestRegisterClient): Promise<void> {
    await this.userRepository.registerClints({
      name,
      email,
      phoneNumber,
    });
  }
}
export { RegisterClientUseCase }