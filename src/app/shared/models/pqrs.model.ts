export class PqrsModel {
  constructor(
      public id_pqrs: string,
      public tipo: string,
      public descripcion: string,
      public email: string,
      public telefono: string,
      public documento: string,
      public estado: string 
  ) { }
}
