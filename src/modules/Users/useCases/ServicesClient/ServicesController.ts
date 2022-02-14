import { container } from "tsyringe";
import { Request, Response } from "express";
import { ServiceUseCase } from "../../useCases/ServicesClient/ServiceUsercase";

interface IBodyCreateService{
  idClient: string;
  nameClient: string;
  service: string;
  sucess: boolean;
}

class ServicesController {
  async handle(request: Request, response:Response): Promise<Response> {
    const { idClient, nameClient, service, sucess} = request.body as IBodyCreateService;
    const serviceUsercase = container.resolve(ServiceUseCase);
    const createService = await serviceUsercase.execute({
    idClient,
    nameClient,
    service,
  sucess,
});
    return response.status(201).json(createService);
  }
}
export { ServicesController };