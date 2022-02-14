import { RegisterClientController } from "../../../../modules/Users/useCases/ClientUser/RegisterClientController";
import { Router } from "express"
import { GetClientByIdController } from "../../../../modules/Users/useCases/ClientUser/GetClientByIdController";
import { UpdatedClientController } from "../../../../modules/Users/useCases/ClientUser/UpdatedClientController"
import { GetClientsController } from "../../../../modules/Users/useCases/ClientUser/GetClientsController";
import { DeleteClientController } from "../../../../modules/Users/useCases/ClientUser/DeleteClientController";

const ClientsRoutes = Router();
const registerClient = new RegisterClientController();
const getClients = new GetClientsController();
const getClientById = new GetClientByIdController();
const updatedClient = new UpdatedClientController();
const deleteClient = new DeleteClientController();

ClientsRoutes.post('/', registerClient.handle)
ClientsRoutes.get("/", getClients.handle);
ClientsRoutes.get("/:id", getClientById.handle);
ClientsRoutes.put("/:id", updatedClient.handle);
ClientsRoutes.delete("/:id", deleteClient.handle);


export default ClientsRoutes