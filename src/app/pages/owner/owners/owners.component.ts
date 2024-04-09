import { Component, OnInit, inject } from '@angular/core';
import { LoadingComponent } from '../../../loading/loading.component';
import { IAllOwner, IOwner } from '../../../models/owner.model';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { IRoleList } from '../../../models/enum.model';

@Component({
  selector: 'app-owners',
  standalone: true,
  imports: [LoadingComponent, ReactiveFormsModule, NgClass],
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css'
})
export class OwnersComponent implements OnInit {

  loading: boolean = true;
  listOwners: IAllOwner[] = [];
  enumRoles: IRoleList[] = [];


  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
      this._apiService.getOwners().subscribe((data: IAllOwner[]) => {
        this.listOwners = data;
        this.loading = false;
      });
}

getRoles() {
  this._apiService.getRoles().subscribe((data: string[]) => {
    this.enumRoles = data.map((rol) => ({
      roles: rol
    }))
  });
}

  navegate(id: number): void {
    this._router.navigate(['owner',id]);
  }

  ownerForm!: FormGroup

constructor(private formBuilder: FormBuilder) {
  this.ownerForm = this.formBuilder.group({
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    contacto: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.minLength(3), Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    role: ['', [Validators.required]]
  })
}

enviar(event: Event) {
  event.preventDefault();

  const owner: IOwner = {
    apellido: this.ownerForm.value.apellido,
    contacto: this.ownerForm.value.contacto,
    correo: this.ownerForm.value.correo,
    username: this.ownerForm.value.username,
    nombre: this.ownerForm.value.nombre,
    password: this.ownerForm.value.password,
    roles: [this.ownerForm.value.role]
  };
  console.log(owner);
  this._apiService.addOwner(owner);
}

hasErrors(field: string, typeError: string) {
  return this.ownerForm.get(field)?.hasError(typeError) && this.ownerForm.get(field)?.touched;
}
}
