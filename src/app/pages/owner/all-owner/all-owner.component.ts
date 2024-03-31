import { Component, OnInit, inject } from '@angular/core';
import { LoadingComponent } from '../../../loading/loading.component';
import { IAllOwner } from '../../../models/owner.model';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-owner',
  standalone: true,
  imports: [LoadingComponent],
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
}
