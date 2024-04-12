import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { LoadingComponent } from '../../../loading/loading.component';
import { IAllSale, ISale } from '../../../models/sale.model';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CurrencyPipe, NgClass } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-sale',
  standalone: true,
  imports: [LoadingComponent, CurrencyPipe, ReactiveFormsModule, NgClass],
  templateUrl: './all-sale.component.html',
  styleUrl: './all-sale.component.css'
})
export class AllSaleComponent implements OnInit {

  loading: boolean = true;
  listSale: IAllSale[] = [];

  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getAllSales().subscribe((data: IAllSale[]) => {
      this.listSale = data;
      this.loading = false;
    })
  }

  navegate(id: number): void {
    this._router.navigate(['sale', id]);
  }

  deleteSale(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta venta?')) {
      this._apiService.deleteSale(id);
    }
  }

  /*------------------------------------------------------------------------------------------------*/

  saleForm!: FormGroup;
  saleUpdateForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
    this.saleForm = this.createSaleForm();
    this.saleUpdateForm = this.updateSaleForm();
  };

  createSaleForm(): FormGroup {
    return this.formBuilder.group({
      fecha: ['', [Validators.required, Validators.minLength(10)]],
      precioKilo: ['', [Validators.required, Validators.minLength(4)]],
      camion: ['', [Validators.required, Validators.minLength(4)]],
      bascula: ['', [Validators.required, Validators.minLength(4)]],
      idCattle: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      cattles: this.formBuilder.array([]),
    });
  }

  get cattles(): FormArray {
    return this.saleForm.get("cattles") as FormArray;
  }

  newCattle(): FormGroup {
    return this.formBuilder.group({
      idCattle: ['', [Validators.required, Validators.minLength(1)]],
      peso: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  addCattle() {
    this.cattles.push(this.newCattle());
    this.cdr.detectChanges();
  }

  removeCattle(i: number) {
    this.cattles.removeAt(i);
  }

  enviar(event: Event) {
    event.preventDefault();

    const sale: ISale = {
      fechaVenta: this.saleForm.value.fecha,
      precioKilo: this.saleForm.value.precioKilo,
      valorCamion: this.saleForm.value.camion,
      valorBascula: this.saleForm.value.bascula,
      saleCattles: this.saleForm.value.cattles.map((cattle: any) => ({
        cattleId: cattle.idCattle,
        peso: cattle.peso,
      }))
    };
    console.log(sale);
    this._apiService.addSales(sale);
  }

  hasErrors(field: string, typeError: string) {
    return this.saleForm.get(field)?.hasError(typeError) && this.saleForm.get(field)?.touched;
  }

  /*--------------------------------------------------------------------------------------------*/

  updateSaleForm(): FormGroup {
    return this.formBuilder.group({
      fechaVenta: ['', [Validators.required, Validators.minLength(10)]],
      precioKilo: ['', [Validators.required, Validators.minLength(4)]],
      valorCamion: ['', [Validators.required, Validators.minLength(4)]],
      valorBascula: ['', [Validators.required, Validators.minLength(4)]],
      cattleId: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      saleCattles: this.formBuilder.array([]),
    });
  }

  saleUpdate: ISale = {
    idSale: undefined,
    fechaVenta: new Date(1, 0, 1),
    precioKilo: 0,
    valorCamion: 0,
    valorBascula: 0,
    saleCattles: []
  }

  loadSale(id: number): void {
    this._apiService.getSale(id).subscribe((data: any) => {
      this.saleUpdate = data;
      this.saleUpdateForm.patchValue(this.saleUpdate);

      this.saleUpdate.saleCattles.forEach((cattle) => {
        this.saleCattles.push(this.formBuilder.group(cattle));
      });
      console.log(this.saleUpdate.saleCattles);
    })
  }

  get saleCattles(): FormArray {
    return this.saleUpdateForm.get("saleCattles") as FormArray;
  }

  newCattleU(): FormGroup {
    return this.formBuilder.group({
      cattleId: ['', [Validators.required, Validators.minLength(1)]],
      peso: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  addCattleU() {
    if (this.saleCattles.length > 0) {
      
    }
    this.saleCattles.push(this.newCattleU());
    this.cdr.detectChanges();
  }

  removeCattleU(i: number) {
    this.saleCattles.removeAt(i);
  }

  enviarUpdate(event: Event) {
    event.preventDefault();

    const sale: ISale = {
      fechaVenta: this.saleUpdateForm.value.fechaVenta,
      precioKilo: this.saleUpdateForm.value.precioKilo,
      valorCamion: this.saleUpdateForm.value.valorCamion,
      valorBascula: this.saleUpdateForm.value.valorBascula,
      saleCattles: this.saleUpdateForm.value.saleCattles.map((cattle: any) => ({
        cattleId: cattle.idCattle,
        peso: cattle.peso,
      }))
    };
    this._apiService.updateSale(sale);
  }
}
