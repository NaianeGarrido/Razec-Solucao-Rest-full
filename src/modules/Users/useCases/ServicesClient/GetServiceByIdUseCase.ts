import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";
import { Service } from "../../entities/Service";

@injectable()
class GetServiceByIdUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) { }
  public async execute(id: string): Promise<Service> {
    const service = await this.userRepository.getServiceById(id);
    if (!service) {
      throw new Error('Service no exists')
    }
    return service
  }
}
export { GetServiceByIdUseCase };
