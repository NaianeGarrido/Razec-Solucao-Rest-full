import { IUserDTO } from "../../../dto/user/IUserDTO"
import { IUserRepository } from "../../../repositories/IUserRepository"
import { connection } from "../../../../../shared/infra/knex";
import { User } from "../../../entities/User";
import { AuthenticateUser } from "../../../entities/AutenticateUser";
import { IClientsDTO } from "../../../dto/clients/IClientsDTO";
import { Client } from "../../../entities/Client";
import { ClientService } from "../../../entities/ClientService";
import { IServiceDTO } from "src/modules/Users/dto/services/IServiceDTO";
import { Service } from "src/modules/Users/entities/Service";
import { IUserUpdateDTO } from "src/modules/Users/dto/user/IUserUpdateDTO";
import { connect } from "http2";
import { ServicesController } from "src/modules/Users/useCases/ServicesClient/ServicesController";

class UserRepository implements IUserRepository {
  /**metodos de Users */
  public async create({
    name,
    email,
    password,
    profile,
    sex,
  }: IUserDTO): Promise<User> {
    const createUser: IUserDTO = await connection("users").insert({
      name: name,
      email: email,
      password: password,
      sex: sex,
      profile: profile,
      createdAt: new Date(),
      updated: new Date(),
    });
    return createUser;
  }

  public async getUsers(): Promise<User> {
    const getUsers: User = await connection("users").select({
      name: "users.name",
      email: "users.email",
      profile: "users.profile",
      sex: "users.sex",
      createdAt: "users.createdAt",
      updated: "users.updated",
    });
    return getUsers;
  }

  public async getUserById(id: string): Promise<User> {
    const getUserById: User = await connection("users").select({
      name: "users.name",
      email: "users.email",
      profile: "users.profile",
      sex: "users.sex",
      createdAt: "users.createdAt",
      updated: "users.updated",
    }).where({ id: id }).first();
    return getUserById;
  }

  public async UpdateUser({ id, name, email, password, sex, profile,
  }: IUserUpdateDTO): Promise<boolean> {
    const userUpdate = await connection("users").update({
      name: name,
      email: email,
      password: password,
      profile: profile,
      sex: sex,
      updated: new Date(),
    }).where({ id: id });
    return userUpdate != 0;
  }

  public async deleteUser(id: string): Promise<boolean> {
    const deleteUser = await connection("users").delete().where({ id: id });
    return deleteUser != 0;
  }
/**metodos de autenticação */
  public async getAuthenticateUser(email: string): Promise<AuthenticateUser> {
    const getUser: AuthenticateUser = await connection("users").select({
      email: "users.email", password: "users.password", id: "users.id"
    }).from("users").where({ email: email }).first()

    return getUser;
  }

  public async getProfileUser(user_id: string): Promise<{ admin: string }> {
    const getProfile: string | any = await connection("users").select({ admin: "users.profile" }).from("users")
      .where({ id: user_id }).first();

    return getProfile;
  }
/**metodo de Clientes */
  public async registerClints({ name, email, phoneNumber }: IClientsDTO): Promise<Client> {
    const client: IClientsDTO = await connection("clients").insert({
      name: name, email: email, phone_number: phoneNumber, createdAt: new Date(), updatedAt: new Date(),
    })
    return client;
  }

public async getClients(): Promise<Client>{
  const getClients: Client = await connection("clients").select({
    name: "clients.name",
    email: "clients.email",
    phoneNumber: "clients.phone_Number",
    createdAt: "clients.createdAt",
    updatedAt:"clients.updatedAt",
  });
  return getClients;
}

public async getClientById(id:string): Promise<Client>{
  const getClients: Client = await connection("clients").select({
    name: "clients.name",
    email: "clients.email",
    phoneNumber: "clients.phone_Number",
    createdAt: "clients.createdAt",
    updatedAt:"clients.updatedAt",
  }).where({id: id}).first();

  return getClients;
}
/** */

public async updateClient (id: string, {name, email, phoneNumber }: IClientsDTO): Promise<boolean> {
  const updateClient = await connection("clients").update({
    name: name,
    email: email,
    phone_number: phoneNumber,
  })
  .where({id: id});
  return updateClient !==0;
}

public async deleteClient(id:string): Promise<boolean> {
  const deleteClient = await connection ("clients").delete().where({id: id});
  return deleteClient !=0;
}

  public async createService({ idClient, nameClient, service, sucess,
  }: IServiceDTO): Promise<Service> {
    const createService: IServiceDTO = await connection("service").insert({
      idClient: idClient,
      nameClient: nameClient,
      service: service,
      sucess: sucess,
      createdAt: new Date(),
      updated: new Date(),
    });
    return createService;
  }

  public async getService(): Promise<Service> {
    const getServices:Service = await connection("service").select({
      idClient:"service.idClient",
      nameClient: "service.nameClient",
      service: "service.service",
      sucess: "service.sucess",
      createdAt: "service.createdAt",
      updated: "service.updated",
    });
    return getServices;
  }

  public async getServiceById(id: string): Promise<Service> {
    const getServices: Service = await connection("service").select({
      idClient:"service.idClient",
      nameClient: "service.nameClient",
      service: "service.service",
      sucess: "service.sucess",
      createdAt: "service.createdAt",
      updated: "service.updated",
    })
    .where({ id: id}).first()
    return getServices;
  }

  public async updateService(
    id: string,
{ idClient, nameClient, service, sucess }: IServiceDTO): Promise<boolean> {
  const updateService = await connection("service").update({
    idClient:idClient,
    nameClient: nameClient,
    service: service,
    updated: new Date(),
  }).where({ id:id });
  return updateService !=0;
  }

public async deleteService(id: string): Promise<boolean> {
  const deleteService = await connection ("service")
  .delete()
  .where ({ id:id })
  return deleteService !=0
  }

}

export { UserRepository };