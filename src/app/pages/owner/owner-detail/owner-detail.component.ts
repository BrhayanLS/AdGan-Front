import { Component, OnInit, inject } from '@angular/core';
import { IAllOwner } from '../../../models/owner.model';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingComponent } from '../../../loading/loading.component';

@Component({
  selector: 'app-owner-detail',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './owner-detail.component.html',
  styleUrl: './owner-detail.component.css'
})
export class OwnerDetailComponent implements OnInit {

  loading: boolean = true;
  public owner?: IAllOwner;

  private _apiService = inject(ApiService);
  private _route = inject(ActivatedRoute);

  ngOnInit(): void {
      this._route.params.subscribe(params => {
        this._apiService.getOwner(params['id']).subscribe((data: IAllOwner) => {
          this.owner = data;
          this.loading = false;
        })
      })
  }
}
