import { inject, injectable } from "tsyringe"
import { IUserRepository } from "../../repositories/IUserRepository"
import { Client } from "../../entities/Client"

@injectable()
class GetClientUseCase {
  constructor(
    @inject ("UserRepository") private userRepository: IUserRepository 
  ){}

public async execute(): Promise<Client> {
  return await this.userRepository.getClients();
  }
}
export { GetClientUseCase };