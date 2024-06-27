import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-encuesta-satisfaccion',
  templateUrl: './encuesta-satisfaccion.component.html',
  styleUrls: ['./encuesta-satisfaccion.component.css']
})
export class EncuestaSatisfaccionComponent implements OnInit {
  @Output() encuestaEnviada = new EventEmitter<boolean>();
  mostrarEncuesta: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  enviarEncuesta() {
    // Aquí puedes agregar la lógica para enviar la encuesta
    // Por ejemplo, puedes llamar a un servicio que envíe los datos al backend
    // Una vez que se envía la encuesta, emitimos un evento para informar al componente padre
    this.encuestaEnviada.emit(true);
    // Luego ocultamos la encuesta
    this.mostrarEncuesta = false;
  }
}
