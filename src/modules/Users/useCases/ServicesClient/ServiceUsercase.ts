import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

export type IRequestService = {
  idClient: string;
  nameClient: string;
  service: string;
  sucess: boolean
};

@injectable()
class ServiceUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute({
    idClient, nameClient, service, sucess
    }: IRequestService): Promise<void> {

    const createService = await this.userRepository.createService({
      idClient, nameClient, service, sucess,
    });
  }
}
export { ServiceUseCase };