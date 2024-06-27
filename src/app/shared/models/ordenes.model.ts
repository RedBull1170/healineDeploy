export class OrdenesModel {
    constructor(
        public id: string,
        public paciente: string,
        public formula: string,
        public diagnostico: string,
        public tratamiento: string,
    ) { }
}
