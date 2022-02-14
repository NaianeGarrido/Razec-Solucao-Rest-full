import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../modules/Users/repositories/IUserRepository";
import { User } from "../../../Users/entities/User";

@injectable()
class GetUserByIdUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) { }

  public async execute(id: string): Promise<User> {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new Error('User no exists')
    }
    return user
  }
}
export { GetUserByIdUseCase }