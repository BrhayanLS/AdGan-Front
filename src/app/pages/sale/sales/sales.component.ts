import { Component, OnInit, inject } from '@angular/core';
import { LoadingComponent } from '../../../loading/loading.component';
import { CurrencyPipe } from '@angular/common';
import { IAllSale } from '../../../models/sale.model';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

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
  }

  navegate(id: number): void {
    this._router.navigate(['sale',id]);
  }
}
