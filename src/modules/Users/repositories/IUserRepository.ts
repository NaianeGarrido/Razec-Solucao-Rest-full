import { IClientsDTO } from "../dto/clients/IClientsDTO";
import { IUserDTO } from "../dto/user/IUserDTO";
import { AuthenticateUser } from "../entities/AutenticateUser";
import { Client } from "../entities/Client";
import { User } from "../entities/User";
import { Service } from"../entities/Service";
import { IServiceDTO } from "../dto/services/IServiceDTO";
import { IUserUpdateDTO } from "../dto/user/IUserUpdateDTO";


interface IUserRepository {

  create({name, email, password, sex, profile}: IUserDTO): Promise<User>;

  getUsers():Promise<User>;

  UpdateUser({id, name, email,password, sex, profile}: IUserUpdateDTO):Promise<boolean>;

  deleteUser(id: string): Promise<boolean>;

  getUserById(id:string): Promise<User>;

  getAuthenticateUser(email: string): Promise<AuthenticateUser>;

  getProfileUser(user_id: string): Promise<{admin:string}>;

  registerClints({name, email, phoneNumber}: IClientsDTO): Promise<Client>;

  getClients(): Promise<Client>;

  getClientById(id:string):Promise<Client>;
  updateClient(id: string, {
    name, email, phoneNumber}: IClientsDTO
  ): Promise<boolean>;

  deleteClient(id:string): Promise<boolean>;

  createService({ idClient, nameClient, service, sucess,
  }: IServiceDTO): Promise<Service>;

  getService(): Promise<Service>;
  getServiceById(id:string): Promise<Service>;
  updateService(id:string, {idClient, nameClient, service, sucess }: IServiceDTO
  ): Promise<boolean>;
  deleteService(id: string): Promise<boolean>;
}
export { IUserRepository };