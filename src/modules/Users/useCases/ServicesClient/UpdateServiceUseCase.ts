import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

export type IRequestUpdateService = {
  idClient: string;
  nameClient: string;
  service: string;
  sucess: boolean;
};
@injectable()
class UpdateServiceUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async execute(
    id: string,
    { idClient, nameClient, service, sucess }: IRequestUpdateService
  ): Promise<boolean> {
    return await this.userRepository.updateService(id, {
      idClient,
      nameClient,
      service,
      sucess,
    });
  }
}
export { UpdateServiceUseCase };