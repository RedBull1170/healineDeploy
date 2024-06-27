// usuarios.model.ts
export class UsuariosModel {
  constructor(
    public tipo: string,
    public documento: number,
    public primerNombre: string,
    public segundoNombre: string,
    public primerApellido: string,
    public segundoApellido: string,
    public email: string,
    public contrasena: string,
    public numero: number,
    public rol: string,
    public sede: string,

  ) { }
  }
  