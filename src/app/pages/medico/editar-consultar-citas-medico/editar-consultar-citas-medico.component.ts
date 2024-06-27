import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/shared/services/citas.service';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-editar-consultar-citas-medico',
  templateUrl: './editar-consultar-citas-medico.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarConsultarCitasMedicoComponent implements OnInit {
  hour: string = '00';
  minute: string = '00';
  second: string = '00';
  userInfo: any; 
  citas: Observable<CitasModel[]> | undefined;
  citasMed: CitasModel[] = [];

  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.updateClock(); 
    setInterval(() => this.updateClock(), 1000); 

    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');
    
    this.obtenerCitasMedico();
  }

  updateClock() {
    const now = new Date();
    this.hour = now.getHours().toString().padStart(2, '0');
    this.minute = now.getMinutes().toString().padStart(2, '0');
    this.second = now.getSeconds().toString().padStart(2, '0');
  }
  
  obtenerCitasMedico() {
    this.citasService.obtenerCitas().subscribe(
      (citas: CitasModel[]) => {
        const citasMedico = citas.filter(cita => cita.medico.includes(this.userInfo.documento));
  
        citasMedico.sort((a, b) => new Date(a.fecha + 'T' + a.hora).getTime() - new Date(b.fecha + 'T' + b.hora).getTime());
        
        this.citasMed = citasMedico;
      },
      error => {
        console.error('Error al obtener citas del médico:', error);
      }
    );
  }
  
}