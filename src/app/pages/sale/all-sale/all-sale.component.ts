import { Component, OnInit, inject } from '@angular/core';
import { LoadingComponent } from '../../../loading/loading.component';
import { IAllSale } from '../../../models/sale.model';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-all-sale',
  standalone: true,
  imports: [LoadingComponent, CurrencyPipe],
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
    this._router.navigate(['sale',id]);
  }
}
