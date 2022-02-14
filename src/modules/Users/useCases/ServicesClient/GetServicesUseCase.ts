import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../Users/repositories/IUserRepository";
import { Service } from "../../entities/Service";

@injectable()
class GetServicesUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async execute(): Promise<Service> {
    return await this.userRepository.getService();
  }
}
export { GetServicesUseCase };