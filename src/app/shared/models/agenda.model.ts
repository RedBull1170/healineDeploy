// agenda.model.ts
export class AgendaModel {
  constructor(
    public id: number,
    public fecha: string,
    public hora_inicio: string,
    public hora_fin: string,
    public medico: string,
    public descripcion: string,
  ) { }
}
