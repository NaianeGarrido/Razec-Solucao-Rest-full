import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

export type IResquestUpdateClient = {
  name: string;
  email: string;
  phoneNumber: string;
};

@injectable()
class UpdatedClientUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ){}

  public async execute(
    id:string,
    {name, email, phoneNumber}: IResquestUpdateClient
  ): Promise<boolean>{
    return await this.userRepository.updateClient(id, {
      name,
      email,
      phoneNumber,
    });
  }
}

export { UpdatedClientUseCase }