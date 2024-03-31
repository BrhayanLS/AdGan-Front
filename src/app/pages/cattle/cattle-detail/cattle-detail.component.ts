import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { IAllCattle } from '../../../models/cattle.model';
import { LoadingComponent } from '../../../loading/loading.component';

@Component({
  selector: 'app-cattle-detail',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './cattle-detail.component.html',
  styleUrl: './cattle-detail.component.css'
})
export class CattleDetailComponent implements OnInit {

  loading: boolean = true;
  public cattle?: IAllCattle;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getCattle(params['id']).subscribe((data: IAllCattle) => {
        this.cattle = data;
        this.loading = false
      })
    })
  }

}
