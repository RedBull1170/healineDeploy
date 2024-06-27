export class RegistrarModel {

    constructor(
      public tipo: string,
      public documento: string,
      public primerNombre: string,
      public segundoNombre: string,
      public primerApellido: string,
      public segundoApellido: string,
      public email: string,
      public contrasena: string,
      public numero: string,
    ) { }
  
  }