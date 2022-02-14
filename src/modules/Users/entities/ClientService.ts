class ClientService {
  clients: [id:string, name: string];

  constructor() {}

    public setClient?(client): void {
      this.clients = client;
      return;
    }
}
export { ClientService };