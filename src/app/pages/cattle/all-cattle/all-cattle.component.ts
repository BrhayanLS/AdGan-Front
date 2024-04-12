import { Component, OnInit, inject } from '@angular/core';
import { IAllCattle, ICattle } from '../../../models/cattle.model';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../../loading/loading.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-all-cattle',
  standalone: true,
  imports: [LoadingComponent, ReactiveFormsModule, NgClass],
  templateUrl: './all-cattle.component.html',
  styleUrl: './all-cattle.component.css'
})
export class AllCattleComponent implements OnInit {

  loading: boolean = true;
  listCattles: IAllCattle[] = [];

  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getAllCattles().subscribe((data: IAllCattle[]) => {
      this.listCattles = data;
      this.loading = false;
    });
  }

  navegate(id: number): void {
    this._router.navigate(['cattle', id])
  }

  deleteCattle(id: number): void {
    if (confirm('¿Estás seguro de eliminar este animal?')) {
      this._apiService.deleteCattle(id);
    }
  }

  /*--------------------------------------------------------------------------------------------------*/

  cattleUpdate: IAllCattle = {
    idCattle: 0,
    idOwner: 0,
    apellido: '',
    correo: '',
    contacto: '',
    nombre: '',
    estado: 0,
    fechaNacimiento: new Date(1, 0, 1),
    nombreOwner: '',
  };

  cattleForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cattleForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      fechaNacimiento: ['', [Validators.required, Validators.minLength(10)]],
      idOwner: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  loadCattle(id: number): void {
    this._apiService.getCattle(id).subscribe((data: any) => {
      this.cattleUpdate = data;
      this.cattleForm.patchValue(this.cattleUpdate);
    });
  }

  enviar(event: Event) {
    event.preventDefault();
  
    const cattle: ICattle = {
      idCattle: this.cattleUpdate?.idCattle,
      nombre: this.cattleForm.value.nombre,
      fechaNacimiento: this.cattleForm.value.fechaNacimiento,
      idOwner: this.cattleForm.value.idOwner
    };
    this._apiService.updateCattle(cattle);
  }
  

  hasErrors(field: string, typeError: string) {
    return this.cattleForm.get(field)?.hasError(typeError) && this.cattleForm.get(field)?.touched;
  }

}