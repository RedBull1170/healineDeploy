import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { EspecialidadesModel } from 'src/app/shared/models/especialidades.model';
import { UsersModel } from 'src/app/shared/models/users.model';
import { CitasService } from 'src/app/shared/services/citas.service';
import { EspecialidadesService } from 'src/app/shared/services/especialidades.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
    selector: 'app-editar-citas-medico',
    templateUrl: './editar-citas-medico.component.html',
    styleUrls: ['../../../app.component.css']
})
export class EditarCitasMedicoComponent implements OnInit {
    id = '';
    citas = new CitasModel('', '', '', '', '', '', '', '');
    usersMedicos: UsersModel[] = [];
    usersPacientes: UsersModel[] = [];
    especialidades: EspecialidadesModel[] = []
    isFormSubmitted: boolean = false;
    userInfo: any;

    constructor(
        private citasService: CitasService,
        private usersService: UsersService,
        private especialidadesService: EspecialidadesService,
        private router: Router,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');

        this.id = this.route.snapshot.params['id'];
        if (this.id) {
            console.log("EDITAR");
            this.citasService.obtenerCita(this.id).subscribe(data => {
                this.citas = data[0];
            }, error => {
                console.log(error);
            });
        } else {
            console.log("CREAR");
        }

        this.usersService.obtenerUsers().subscribe(
            (data) => {
                this.usersPacientes = data.filter(user => user.rol === 'Paciente');
            },
            (error) => {
                console.error(error);
            }
        );

        this.especialidadesService.obtenerEspecialidades().subscribe(
            (data) => {
                this.especialidades = data;
            },
            (error) => {
                console.error(error);
            }
        );
    }

    onSubmit() {
        if (!this.isFormFilled()) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        console.log("Médico seleccionado:", this.citas.medico);
        console.log("Paciente seleccionado:", this.citas.paciente);

        if (!this.citas.medico) {
            alert('Seleccione un médico');
            return;
        }
        if (!this.citas.paciente) {
            alert('Seleccione un paciente');
            return;
        }

        // Validar la fecha de la cita
        const hoy = new Date();
        const fechaSeleccionada = new Date(this.citas.fecha);

        const unMesAntes = new Date();
        unMesAntes.setMonth(unMesAntes.getMonth() - 1);
        if (fechaSeleccionada < unMesAntes) {
            alert('La fecha de la cita no puede ser mayor a un mes antes del día actual');
            return;
        }

        const unMesDespues = new Date();
        unMesDespues.setMonth(unMesDespues.getMonth() + 1);
        if (fechaSeleccionada > unMesDespues) {
            alert('La fecha de la cita no puede ser mayor a un mes a partir del día actual');
            return;
        }

        if (this.id) {
            // Si hay un ID, significa que estás editando, entonces utiliza el método de actualizar
            this.citasService.actualizarCitas(this.citas).subscribe(
                (data) => {
                    alert('Cita actualizada correctamente');
                    this.router.navigate(['/editar-consultar-citas-medico']);
                },
                (error) => {
                    if (error.status === 500) {
                        alert('Verifique los campos o la cita ya está registrada');
                    } else {
                        console.error(error);
                    }
                }
            );
        } else {
            // Si no hay un ID, significa que estás creando, utiliza el método de agregar
            this.citasService.agregarCitas(this.citas).subscribe(
                (data) => {
                    alert('Cita registrada correctamente');
                    this.router.navigate(['/editar-consultar-citas-medico']);
                },
                (error) => {
                    if (error.status === 500) {
                        alert('Verifique los campos o la cita ya está registrada');
                    } else {
                        console.error(error);
                    }
                }
            );
        }
    }

    isFormFilled(): boolean {
        return !!this.citas.fecha && !!this.citas.hora && !!this.citas.paciente && !!this.citas.especialidad;
    }

    goBack() {
        window.history.back();
    }
}
