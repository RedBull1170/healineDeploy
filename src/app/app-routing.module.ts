
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages Principales (Users)
import { IndexComponent } from './pages/homes/index/index.component';
import { ServiciosComponent } from './pages/homes/servicios/servicios.component';
import { AcercaComponent } from './pages/homes/acerca/acerca.component';
import { EspecialidadesComponent } from './pages/homes/especialidades/especialidades.component';
import { LoginComponent } from './pages/homes/login/login.component';
import { PqrsComponent } from './pages/homes/pqrs/pqrs.component';
import { UsersComponent } from './pages/homes/users/users.component';
import { UserHomeComponent } from './pages/homes/user-home/user-home.component';
import { UserFalseComponent } from './pages/homes/user-false/user-false.component';


// Pages Principales Admin
import { IndexAdminComponent } from './pages/admin/index-admin/index-admin.component';
import { ServiciosAdminComponent } from './pages/admin/servicios-admin/servicios-admin.component';
import { AboutAdminComponent } from './pages/admin/about-admin/about-admin.component';
import { EspecialidadesAdminComponent } from './pages/admin/especialidades-admin/especialidades-admin.component';
import { ListarPqrsComponent } from './pages/admin/pqrs-admin/listar-pqrs/listar-pqrs.component';
import { EditarPqrsComponent } from './pages/admin/pqrs-admin/editar-pqrs/editar-pqrs.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminHome2Component } from './pages/admin/admin-home-2/admin-home-2.component';


// CRUDS Admin
import { HerramientasComponent } from './pages/admin/herramientas/herramientas.component';

import { UsuariosHomeComponent } from './pages/admin/homes-herramientas/usuarios-home/usuarios-home.component';
import { ConsultarUsersComponent } from './cruds/users/consultar-users/consultar-users.component';
import { EditarConsultarUsersComponent } from './cruds/users/editar-consultar-users/editar-consultar-users.component';
import { EditarUsersComponent } from './cruds/users/editar-users/editar-users.component';
import { RegistrarUsersComponent } from './cruds/users/registrar-users/registrar-users.component';

import { ConsultarHistorialComponent } from './cruds/historial/consultar-historial/consultar-historial.component';

import { AgendaHomeComponent } from './pages/admin/homes-herramientas/agenda-home/agenda-home.component';
import { ConsultarAgendaComponent } from './cruds/agenda/consultar-agenda/consultar-agenda.component';
import { RegistrarAgendaComponent } from './cruds/agenda/registrar-agenda/registrar-agenda.component';
import { EditarConsultarAgendaComponent } from './cruds/agenda/editar-consultar-agenda/editar-consultar-agenda.component';
import { EditarAgendaComponent } from './cruds/agenda/editar-agenda/editar-agenda.component';

import { SedesHomeComponent } from './pages/admin/homes-herramientas/sedes-home/sedes-home.component';
import { ConsultarSedesComponent } from './cruds/sedes/consultar-sedes/consultar-sedes.component';
import { RegistrarSedesComponent } from './cruds/sedes/registrar-sedes/registrar-sedes.component';
import { EditarConsultarSedesComponent } from './cruds/sedes/editar-consultar-sedes/editar-consultar-sedes.component';
import { EditarSedesComponent } from './cruds/sedes/editar-sedes/editar-sedes.component';

import { RolesHomeComponent } from './pages/admin/homes-herramientas/roles-home/roles-home.component';
import { ConsultarRolesComponent } from './cruds/roles/consultar-roles/consultar-roles.component';
import { RegistrarRolesComponent } from './cruds/roles/registrar-roles/registrar-roles.component';
import { EditarConsultarRolesComponent } from './cruds/roles/editar-consultar-roles/editar-consultar-roles.component';
import { EditarRolesComponent } from './cruds/roles/editar-roles/editar-roles.component';

import { EspecialidadesHomeComponent } from './pages/admin/homes-herramientas/especialidades-home/especialidades-home.component';
import { ConsultarEspecialidadesComponent } from './cruds/especialidades/consultar-especialidades/consultar-especialidades.component';
import { RegistrarEspecialidadesComponent } from './cruds/especialidades/registrar-especialidades/registrar-especialidades.component';
import { EditarConsultarEspecialidadesComponent } from './cruds/especialidades/editar-consultar-especialidades/editar-consultar-especialidades.component';
import { EditarEspecialidadesComponent } from './cruds/especialidades/editar-especialidades/editar-especialidades.component';

import { CitasHomeComponent } from './pages/admin/homes-herramientas/citas-home/citas-home.component';
import { ConsultarCitasComponent } from './cruds/citas/consultar-citas/consultar-citas.component';
import { RegistrarCitasComponent } from './cruds/citas/registrar-citas/registrar-citas.component';
import { EditarConsultarCitasComponent } from './cruds/citas/editar-consultar-citas/editar-consultar-citas.component';
import { EditarCitasComponent } from './cruds/citas/editar-citas/editar-citas.component';

import { FormulasHomeComponent } from './pages/admin/homes-herramientas/formulas-home/formulas-home.component';
import { ConsultarFormulasComponent } from './cruds/formulas/consultar-formulas/consultar-formulas.component';
import { RegistrarFormulasComponent } from './cruds/formulas/registrar-formulas/registrar-formulas.component';
import { EditarConsultarFormulasComponent } from './cruds/formulas/editar-consultar-formulas/editar-consultar-formulas.component';
import { EditarFormulasComponent } from './cruds/formulas/editar-formulas/editar-formulas.component';

import { OrdenesHomeComponent } from './pages/admin/homes-herramientas/ordenes-home/ordenes-home.component';
import { ConsultarOrdenesComponent } from './cruds/ordenes/consultar-ordenes/consultar-ordenes.component';
import { RegistrarOrdenesComponent } from './cruds/ordenes/registrar-ordenes/registrar-ordenes.component';
import { EditarConsultarOrdenesComponent } from './cruds/ordenes/editar-consultar-ordenes/editar-consultar-ordenes.component';
import { EditarOrdenesComponent } from './cruds/ordenes/editar-ordenes/editar-ordenes.component';

import { ExamenesHomeComponent } from './pages/admin/homes-herramientas/examenes-home/examenes-home.component';
import { RegistrarExamenesComponent } from './cruds/examenes/registrar-examenes/registrar-examenes.component';
import { ConsultarExamenesComponent } from './cruds/examenes/consultar-examenes/consultar-examenes.component';
import { EditarConsultarExamenesComponent } from './cruds/examenes/editar-consultar-examenes/editar-consultar-examenes.component';
import { EditarExamenesComponent } from './cruds/examenes/editar-examenes/editar-examenes.component';


import { RegistrarIncapacidadComponent } from './cruds/incapacidad/registrar-incapacidad/registrar-incapacidad.component';
import { ConsultarIncapacidadComponent } from './cruds/incapacidad/consultar-incapacidad/consultar-incapacidad.component';
import { EditarConsultarIncapacidadComponent } from './cruds/incapacidad/editar-consultar-incapacidad/editar-consultar-incapacidad.component';
import { EditarIncapacidadComponent } from './cruds/incapacidad/editar-incapacidad/editar-incapacidad.component';
import { IncapacidadHomeComponent } from './pages/admin/homes-herramientas/incapacidad-home/incapacidad-home.component';

//Pages Principales Medico
import { MedicoHomeComponent } from './pages/medico/medico-home/medico-home.component';
import { MedicoHome2Component } from './pages/medico/medico-home-2/medico-home-2.component';
import { MedicoCitasComponent } from './pages/medico/medico-citas/medico-citas.component';
import { RegistrarCitasMedicoComponent } from './pages/medico/registrar-citas-medico/registrar-citas-medico.component';
import { EditarConsultarCitasMedicoComponent } from './pages/medico/editar-consultar-citas-medico/editar-consultar-citas-medico.component';
import { EditarCitasMedicoComponent } from './pages/medico/editar-citas-medico/editar-citas-medico.component';
import { MedicoPacientesComponent } from './pages/medico/medico-pacientes/medico-pacientes.component';
import { MedicoAgendaComponent } from './pages/medico/medico-agenda/medico-agenda.component';
import { RegistrarAgendaMedicoComponent } from './pages/medico/registrar-agenda-medico/registrar-agenda-medico.component';

// °°°°°°°°°°°°°°°°°°°°°°
import { PacienteHomeComponent } from './pages/paciente/paciente-home/paciente-home.component';
import { MedicoExamenesComponent } from './pages/medico/medico-examenes/medico-examenes.component';
import { RegistrarExamenesMedicoComponent } from './pages/medico/registrar-examenes-medico/registrar-examenes-medico.component';
import { EditarConsultarExamenesMedicoComponent } from './pages/medico/editar-consultar-examenes-medico/editar-consultar-examenes-medico.component';
import { EditarPerfilComponent } from './pages/medico/editar-perfil/editar-perfil.component';
import { MedicoOrdenesComponent } from './pages/medico/medico-ordenes/medico-ordenes.component';
import { RegistrarOrdenesMedicoComponent } from './pages/medico/registrar-ordenes-medico/registrar-ordenes-medico.component';
import { EditarOrdenesMedicoComponent } from './pages/medico/editar-ordenes-medico/editar-ordenes-medico.component';
import { MedicoFormulasComponent } from './pages/medico/medico-formulas/medico-formulas.component';
import { RegistrarFormulasMedicoComponent } from './pages/medico/registrar-formulas-medico/registrar-formulas-medico.component';
import { RegistrarIncapacidadesMedicoComponent } from './pages/medico/registrar-incapacidades-medico/registrar-incapacidades-medico.component';
import { EncuestasHomeComponent } from './pages/admin/homes-herramientas/encuestas-home/encuestas-home.component';
import { PacienteHome2Component } from './pages/paciente/paciente-home-2/paciente-home-2.component';
import { AfiliacionComponent } from './pages/paciente/afiliacion/afiliacion.component';
import { CitasComponent } from './pages/paciente/citas/citas.component';
import { HistoriaComponent } from './pages/paciente/historia/historia.component';
import { RegistrarPeticionComponent } from './pages/paciente/registrar-peticion/registrar-peticion.component';
import { EditarPerfilPacienteComponent } from './pages/paciente/editar-perfil-paciente/editar-perfil-paciente.component';
import { SecretariaHomeComponent } from './pages/secretaria/secretaria-home/secretaria-home.component';
import { PacientesConsultarComponent } from './pages/secretaria/pacientes/pacientes-consultar/pacientes-consultar.component';
import { SecretariaHome2Component } from './pages/secretaria/secretaria-home-2/secretaria-home-2.component';
import { PacientesEditarComponent } from './pages/secretaria/pacientes/pacientes-editar/pacientes-editar.component';
import { AgendaConsultarComponent } from './pages/secretaria/agenda/agenda-consultar/agenda-consultar.component';
import { AgendaEditarComponent } from './pages/secretaria/agenda/agenda-editar/agenda-editar.component';
import { CitasConsultarComponent } from './pages/secretaria/citas/citas-consultar/citas-consultar.component';
import { CitasEditarComponent } from './pages/secretaria/citas/citas-editar/citas-editar.component';
import { ExamenesConsultarComponent } from './pages/secretaria/examenes/examenes-consultar/examenes-consultar.component';
import { ExamenesEditarComponent } from './pages/secretaria/examenes/examenes-editar/examenes-editar.component';
import { SedesConsultarComponent } from './pages/secretaria/sedes/sedes-consultar/sedes-consultar.component';
import { SedesEditarComponent } from './pages/secretaria/sedes/sedes-editar/sedes-editar.component';
import { PqrsListarSecretariaComponent } from './pages/secretaria/pqrs/pqrs-listar-secretaria/pqrs-listar-secretaria.component';
import { PqrsEditarSecretariaComponent } from './pages/secretaria/pqrs/pqrs-editar-secretaria/pqrs-editar-secretaria.component';
import { HistoriaConsultarSecretariaComponent } from './pages/secretaria/historia-medica-secretaria/historia-consultar-secretaria/historia-consultar-secretaria.component';
import { OrdenesConsultarSecretariaComponent } from './pages/secretaria/ordenes-secretaria/ordenes-consultar-secretaria/ordenes-consultar-secretaria.component';
import { IncapacidadConsultarSecretariaComponent } from './pages/secretaria/incapacidad-secretaria/incapacidad-consultar-secretaria/incapacidad-consultar-secretaria.component';
import { CitasRegistrarSecretariaComponent } from './pages/secretaria/citas/citas-registrar-secretaria/citas-registrar-secretaria.component';
import { AgendaRegistrarSecretariaComponent } from './pages/secretaria/agenda/agenda-registrar-secretaria/agenda-registrar-secretaria.component';
import { FormulasConsultarSecretariaComponent } from './pages/secretaria/formulas-secretaria/formulas-consultar-secretaria/formulas-consultar-secretaria.component';
import { EditarPerfilSecretariaComponent } from './pages/secretaria/editar-perfil-secretaria/editar-perfil-secretaria.component';
import { RecuperacionContrasenaComponent } from './pages/homes/recuperacion-contrasena/recuperacion-contrasena.component';
import { ActualizarContrasenaComponent } from './pages/homes/actualizar-contrasena/actualizar-contrasena.component';



const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'especialidades', component: EspecialidadesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pqrs', component: PqrsComponent },
  { path: 'users/agregar', component: UsersComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'user-false', component: UserFalseComponent },
  

  // Pages Admin
  { path:'index-admin', component: IndexAdminComponent },
  { path:'servicios-admin', component: ServiciosAdminComponent },
  { path:'acerca-admin', component: AboutAdminComponent },
  { path:'especialidades-admin', component: EspecialidadesAdminComponent },
  { path:'pqrs-listar', component: ListarPqrsComponent },
  { path:'pqrs-editar/editar/:id', component: EditarPqrsComponent },
  { path:'admin-home', component: AdminHomeComponent },
  { path:'admin-home-2', component: AdminHome2Component },
  
  // Cruds Admin
  
  { path:'herramientas', component: HerramientasComponent },
  { path:'usuarios-home', component: UsuariosHomeComponent },
  { path:'agenda-home', component: AgendaHomeComponent },
  { path:'sedes-home', component: SedesHomeComponent },
  { path:'roles-home', component: RolesHomeComponent },
  { path:'especialidades-home', component: EspecialidadesHomeComponent },
  { path:'citas-home', component: CitasHomeComponent },
  { path:'formulas-home', component: FormulasHomeComponent },
  { path:'ordenes-home', component: OrdenesHomeComponent },
  { path:'examenes-home', component: ExamenesHomeComponent },
  { path:'incapacidad-home', component: IncapacidadHomeComponent },


  { path:'consultar-users', component: ConsultarUsersComponent },
  { path:'registrar-users', component: RegistrarUsersComponent },
  { path:'editar-consultar-users', component: EditarConsultarUsersComponent },
  { path:'editar-users/editar/:id', component: EditarUsersComponent },

  { path:'consultar-historial', component: ConsultarHistorialComponent },

  { path:'consultar-agenda', component: ConsultarAgendaComponent },
  { path:'registrar-agenda', component: RegistrarAgendaComponent },
  { path:'editar-consultar-agenda', component: EditarConsultarAgendaComponent },
  { path:'editar-agenda/editar/:id', component: EditarAgendaComponent },

  { path:'consultar-sedes', component: ConsultarSedesComponent },
  { path:'registrar-sedes', component: RegistrarSedesComponent },
  { path:'editar-consultar-sedes', component: EditarConsultarSedesComponent },
  { path:'editar-sedes/editar/:id', component: EditarSedesComponent },

  { path:'consultar-roles', component: ConsultarRolesComponent },
  { path:'registrar-roles', component: RegistrarRolesComponent },
  { path:'editar-consultar-roles', component: EditarConsultarRolesComponent },
  { path:'editar-roles/editar/:id', component: EditarRolesComponent },

  //{ path:'consultar-historia', component: ConsultarHistoriaComponent },
  //{ path:'registrar-historia', component: RegistrarHistoriaComponent },
  //{ path:'editar-consultar-historia', component: EditarConsultarHistoriaComponent },
  //{ path:'editar-historia/editar/:id', component: EditarHistoriaComponent },

  { path:'consultar-especialidades', component: ConsultarEspecialidadesComponent },
  { path:'registrar-especialidades', component: RegistrarEspecialidadesComponent },
  { path:'editar-consultar-especialidades', component: EditarConsultarEspecialidadesComponent },
  { path:'editar-especialidades/editar/:id', component: EditarEspecialidadesComponent },

  { path:'consultar-citas', component: ConsultarCitasComponent },
  { path:'registrar-citas', component: RegistrarCitasComponent },
  { path:'editar-consultar-citas', component: EditarConsultarCitasComponent },
  { path:'editar-citas/editar/:id', component: EditarCitasComponent },

  { path:'consultar-formulas', component: ConsultarFormulasComponent },
  { path:'registrar-formulas', component: RegistrarFormulasComponent },
  { path:'editar-consultar-formulas', component: EditarConsultarFormulasComponent },
  { path:'editar-formulas/editar/:id', component: EditarFormulasComponent },
  
  { path:'consultar-ordenes', component: ConsultarOrdenesComponent },
  { path:'registrar-ordenes', component: RegistrarOrdenesComponent },
  { path:'editar-consultar-ordenes', component: EditarConsultarOrdenesComponent },
  { path:'editar-ordenes/editar/:id', component: EditarOrdenesComponent },

  { path:'consultar-examenes', component: ConsultarExamenesComponent },
  { path:'registrar-examenes', component: RegistrarExamenesComponent },
  { path:'editar-consultar-examenes', component: EditarConsultarExamenesComponent },
  { path:'editar-examenes/editar/:id', component: EditarExamenesComponent },

  { path:'consultar-incapacidad', component: ConsultarIncapacidadComponent },
  { path:'registrar-incapacidad', component: RegistrarIncapacidadComponent },
  { path:'editar-consultar-incapacidad', component: EditarConsultarIncapacidadComponent },
  { path:'editar-incapacidad/editar/:id', component: EditarIncapacidadComponent },

  { path:'encuestas-home', component: EncuestasHomeComponent },


  // Pages Medico
  { path:'medico-home', component: MedicoHomeComponent },
  { path:'medico-home-2', component: MedicoHome2Component },

  { path:'medico-citas', component: MedicoCitasComponent},
  { path:'registrar-citas-medico', component: RegistrarCitasMedicoComponent},
  { path:'editar-consultar-citas-medico', component: EditarConsultarCitasMedicoComponent},
  { path:'editar-citas-medico/editar/:id', component: EditarCitasMedicoComponent},

  { path:'medico-pacientes', component: MedicoPacientesComponent },
  { path:'medico-agenda', component: MedicoAgendaComponent },
  { path:'registrar-agenda-medico', component: RegistrarAgendaMedicoComponent },
  { path:'medico-examenes', component: MedicoExamenesComponent },
  { path:'registrar-examenes-medico', component: RegistrarExamenesMedicoComponent },
  { path:'editar-consultar-examenes-medico', component: EditarConsultarExamenesMedicoComponent },

  { path:'editar-perfil/editar/:documento', component: EditarPerfilComponent},

  { path:'medico-ordenes', component: MedicoOrdenesComponent},
  { path:'registrar-ordenes-medico', component: RegistrarOrdenesMedicoComponent},
  { path:'editar-ordenes-medico/editar/:id', component: EditarOrdenesMedicoComponent},
  { path:'medico-formulas', component: MedicoFormulasComponent},
  { path:'registrar-incapacidades-medico', component: RegistrarIncapacidadesMedicoComponent},
  { path: 'registrar-formulas-medico', component: RegistrarFormulasMedicoComponent },

  //Pages Paciente
  { path:'paciente-home', component: PacienteHomeComponent },
  { path:'paciente-home-2', component: PacienteHome2Component },
  { path:'afiliacion', component: AfiliacionComponent },
  { path:'citas', component: CitasComponent },
  { path:'historia', component: HistoriaComponent },
  { path:'editar-perfil', component: EditarPerfilComponent },
  { path:'registrar-peticion', component: RegistrarPeticionComponent },
  { path:'editar-perfil-paciente', component: EditarPerfilPacienteComponent },


  // Pages Secretaria
  { path:'secretaria-home', component: SecretariaHomeComponent},
  { path:'secretaria-home-2', component: SecretariaHome2Component},
  { path:'pacientes-consultar', component: PacientesConsultarComponent},
  { path:'pacientes-editar/editar/:id', component: PacientesEditarComponent},
  { path:'agenda-consultar', component: AgendaConsultarComponent},
  { path:'agenda-editar/editar/:id', component: AgendaEditarComponent},
  { path:'citas-consultar', component: CitasConsultarComponent},
  { path:'citas-editar/editar/:id', component: CitasEditarComponent},
  { path:'examenes-consultar', component: ExamenesConsultarComponent},
  { path:'examenes-editar/editar/:id', component: ExamenesEditarComponent},
  { path:'sedes-consultar', component: SedesConsultarComponent},
  { path:'sedes-editar/editar/:id', component: SedesEditarComponent},
  { path:'listar-PQRS-secretaria', component: PqrsListarSecretariaComponent},
  { path:'pqrs-editar-secretaria/editar/:id', component: PqrsEditarSecretariaComponent},
  { path:'historia-consultar-secretaria', component: HistoriaConsultarSecretariaComponent},
  { path:'ordenes-consultar-secretaria', component: OrdenesConsultarSecretariaComponent},
  { path:'formulas-consultar-secretaria', component: FormulasConsultarSecretariaComponent},
  { path:'incapacidad-consultar-secretaria', component: IncapacidadConsultarSecretariaComponent},
  { path:'agenda-registrar-secretaria', component: AgendaRegistrarSecretariaComponent},
  { path:'citas-registrar-secretaria', component: CitasRegistrarSecretariaComponent},
  { path:'editar-perfil-secretaria', component: EditarPerfilSecretariaComponent},
  
  { path:'recuperacion-contrasena', component: RecuperacionContrasenaComponent},
  { path:'actualizar-contrasena', component: ActualizarContrasenaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
