import { Component, OnInit, inject } from '@angular/core';
import { LoadingComponent } from '../../../loading/loading.component';
import { IAllOwner, IOwner } from '../../../models/owner.model';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IRoleList } from '../../../models/enum.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-all-owner',
  standalone: true,
  imports: [LoadingComponent, ReactiveFormsModule, NgClass],
  templateUrl: './all-owner.component.html',
  styleUrl: './all-owner.component.css'
})
export class AllOwnerComponent implements OnInit {

  loading: boolean = true;
  listOwners:IAllOwner[] = [];

  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
      this._apiService.getAllOwners().subscribe((data: IAllOwner[]) => {
        this.listOwners = data;
        this.loading = false;
      })
  }

  navegate(id: number): void {
    this._router.navigate(['owner',id]);
  }

  deleteOwner(id:number): void {
    if(confirm('¿Estás seguro del eliminar a este dueño?')) {
      this._apiService.deleteOwner(id);
    }
  }

  enumRoles: IRoleList[] = [];
  ownerUpdateForm!: FormGroup;

  getRoles() {
    this._apiService.getRoles().subscribe((data: string[]) => {
      this.enumRoles = data.map((rol) => ({ roles: rol }));
    });
  }

  constructor(private formBuilder: FormBuilder) {
    this.ownerUpdateForm = this.createOwnerUpdateForm();
  }
  
  createOwnerUpdateForm(): FormGroup {
    return this.formBuilder.group({
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      contacto: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.minLength(3), Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      roles: ['', [Validators.required]]
    });
  }

  /*--------------------------------------------------------------------------------------------------*/

  ownerUpdate: IOwner = {
    idOwner: undefined,
    apellido: '',
    contacto: '',
    correo: '',
    username: '',
    nombre: '',
    password: '',
    roles: []
  };

  loadOwner(id: number): void {
    this._apiService.getOwner(id).subscribe((data: any) => {
      this.ownerUpdate = data;
      this.ownerUpdate.password = '';
      this.ownerUpdateForm.patchValue(this.ownerUpdate);
    });
  }

  enviarUpdate(event: Event) {
    event.preventDefault();

    const owner: IOwner = {
      idOwner: this.ownerUpdate.idOwner,
      apellido: this.ownerUpdateForm.value.apellido,
      contacto: this.ownerUpdateForm.value.contacto,
      correo: this.ownerUpdateForm.value.correo,
      username: this.ownerUpdateForm.value.username,
      nombre: this.ownerUpdateForm.value.nombre,
      password: this.ownerUpdateForm.value.password,
      roles: [this.ownerUpdateForm.value.roles],
    };
    this._apiService.updateOwner(owner);
  }

  hasErrorsU(field: string, typeError: string) {
    return this.ownerUpdateForm.get(field)?.hasError(typeError) && this.ownerUpdateForm.get(field)?.touched;
  }
}