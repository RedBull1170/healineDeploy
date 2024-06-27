import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PqrsModel } from 'src/app/shared/models/pqrs.model';
import { PqrsService } from 'src/app/shared/services/pqrs.service';

@Component({
  selector: 'app-pqrs-editar-secretaria',
  templateUrl: './pqrs-editar-secretaria.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class PqrsEditarSecretariaComponent implements OnInit {

  id = ''
  pqrs = new PqrsModel("","","","","","","");

  constructor(
    private pqrsService: PqrsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if(this.id) {
      console.log("EDITAR");
      this.pqrsService.obtenerPqr(this.id).subscribe(data=> {
        this.pqrs = data[0]
      }, error => {
        console.log(error);
      })
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if(this.pqrs.id_pqrs) {
      this.pqrsService.actualizarPqrs(this.pqrs).subscribe(data => {
        alert(data)
        this.router.navigate(['/pqrs-listar'])
      })
    } else {
      console.log('crear');
      }
    }
  }
