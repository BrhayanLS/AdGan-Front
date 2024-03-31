import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CurrencyPipe } from '@angular/common';
import { ISoldCattle } from '../../../models/cattle.model';
import { LoadingComponent } from '../../../loading/loading.component';

@Component({
  selector: 'app-sold',
  standalone: true,
  imports: [CurrencyPipe, LoadingComponent],
  templateUrl: './sold.component.html',
  styleUrl: './sold.component.css'
})
export class SoldComponent implements OnInit {

  loading: boolean = true;
  listCattles: ISoldCattle[] = [];

  private _apiService = inject(ApiService);

  ngOnInit(): void {
      this._apiService.getSold().subscribe((data: ISoldCattle[]) => {
        this.listCattles = data;
        this.loading = false;
      })
  }

}
