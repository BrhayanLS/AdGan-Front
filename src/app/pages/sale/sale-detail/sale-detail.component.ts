import { Component, OnInit, inject } from '@angular/core';
import { LoadingComponent } from '../../../loading/loading.component';
import { IAllSale } from '../../../models/sale.model';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-sale-detail',
  standalone: true,
  imports: [LoadingComponent, CurrencyPipe],
  templateUrl: './sale-detail.component.html',
  styleUrl: './sale-detail.component.css'
})
export class SaleDetailComponent implements OnInit {

  loading: boolean = true;
  listSale?: IAllSale;

  private _apiService = inject(ApiService);
  private _route = inject(ActivatedRoute);

  ngOnInit(): void {
      this._route.params.subscribe(params => {
        this._apiService.getSale(params['id']).subscribe((data: IAllSale) => {
          this.listSale = data;
          this.loading = false;
        })
      })
  }
}
