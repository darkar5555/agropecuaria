import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formaContacto : FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.formaContacto = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['',[Validators.required]],
      empresa: ['',[Validators.required]],
      telefono: ['',[Validators.required]],
      correo: ['',[Validators.required]],
      mensaje: ['',[Validators.required]]
    });
  }

  enviar(){
    console.log(this.formaContacto.value);
    if (this.formaContacto.invalid) {
      swal('Importante', 'Debe llenar todos los campos', 'warning');
      return;
    }
    swal('Gracias', 'Nos comunicaremos pronto con usted','success');
    return;
  }

}
