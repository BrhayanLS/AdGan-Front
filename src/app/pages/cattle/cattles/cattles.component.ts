import { Component, OnInit, inject } from '@angular/core';
import { IAllCattle, ICattle } from '../../../models/cattle.model';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../../loading/loading.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cattles',
  standalone: true,
  imports: [LoadingComponent, ReactiveFormsModule, NgClass],
  templateUrl: './cattles.component.html',
  styleUrl: './cattles.component.css'
})
export class CattlesComponent {

  loading: boolean = true;
  listCattles: IAllCattle[] = [];

  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getCattles().subscribe((data: IAllCattle[]) => {
      this.listCattles = data;
      this.loading = false;
    })
}

navegate(id: number): void {
  this._router.navigate(['cattle', id])
}

cattleForm!: FormGroup;

constructor(private formBuilder: FormBuilder) {
  this.cattleForm = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    nacimiento: ['', [Validators.required, Validators.minLength(10)]],
    owner: ['', [Validators.required, Validators.minLength(1)]]
  })
}

enviar(event: Event) {
  event.preventDefault();
  
  const cattle: ICattle = {
    nombre: this.cattleForm.value.nombre,
    fechaNacimiento: this.cattleForm.value.nacimiento,
    idOwner: this.cattleForm.value.owner
  };
  this._apiService.addCattle(cattle);
}

hasErrors(field: string, typeError: string) {
  return this.cattleForm.get(field)?.hasError(typeError) && this.cattleForm.get(field)?.touched;
}
}
