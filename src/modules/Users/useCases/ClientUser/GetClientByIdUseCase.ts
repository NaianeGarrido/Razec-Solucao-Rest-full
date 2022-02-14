import { inject, injectable } from "tsyringe"
import { IUserRepository } from "../../repositories/IUserRepository"
import { Client } from "../../entities/Client"

@injectable()
class GetClientByIdUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) { }

  public async execute(id: string): Promise<Client> {
    const client = await this.userRepository.getClientById(id);
    if (!client) {
      throw new Error('Client no exists')
    }
    return client
  }
}
export { GetClientByIdUseCase };