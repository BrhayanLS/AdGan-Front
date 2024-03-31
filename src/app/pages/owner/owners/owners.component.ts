import { Component, OnInit, inject } from '@angular/core';
import { LoadingComponent } from '../../../loading/loading.component';
import { IAllOwner } from '../../../models/owner.model';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owners',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css'
})
export class OwnersComponent implements OnInit {

  loading: boolean = true;
  listOwners: IAllOwner[] = [];

  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
      this._apiService.getOwners().subscribe((data: IAllOwner[]) => {
        this.listOwners = data;
        this.loading = false;
      })
  }

  navegate(id: number): void {
    this._router.navigate(['owner',id]);
  }
}
