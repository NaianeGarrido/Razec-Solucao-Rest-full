import { inject, injectable } from "tsyringe"
import { IUserRepository } from "../../repositories/IUserRepository"

@injectable ()
class DeleteUserUsecase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
) {}
public async execute(id: string): Promise<void> {
  await this.userRepository.deleteUser(id);
  }
}

export { DeleteUserUsecase };