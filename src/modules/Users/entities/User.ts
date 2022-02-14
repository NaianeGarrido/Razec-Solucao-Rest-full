class User{
  name: string;
  email: string;
  password?: string;
  profile: "administrador" | "financeiro" | "funcionario";
  sex: "masculino" | "feminino" | "naoInformado";

  public constructor () {}
}

export {User}