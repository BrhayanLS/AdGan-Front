import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { LoadingComponent } from '../../../loading/loading.component';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { IAllSale, ISale, SaveSaleCattle } from '../../../models/sale.model';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [LoadingComponent, CurrencyPipe],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent implements OnInit {

  loading: boolean = true;
  listSale: IAllSale[] = [];

  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getSales().subscribe((data: IAllSale[]) => {
      this.listSale = data;
      this.loading = false;
    })

    //this.loadForm();
  }

  navegate(id: number): void {
    this._router.navigate(['sale', id]);
  }

}