import { Component, OnInit, inject } from '@angular/core';
import { IAllCattle } from '../../../models/cattle.model';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../../loading/loading.component';

@Component({
  selector: 'app-not-available',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './not-available.component.html',
  styleUrl: './not-available.component.css'
})
export class NotAvailableComponent implements OnInit {

  loading:boolean = true;
  listCattles: IAllCattle[] = [];

  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
      this._apiService.getNotAvailable().subscribe((data:IAllCattle[]) => {
        this.listCattles = data;
        this.loading = false;
      })
  }

  navegate(id: number): void {
    this._router.navigate(['cattle',id]);
  }
}
