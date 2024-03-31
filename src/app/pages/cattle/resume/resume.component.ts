import { Component, OnInit, inject } from '@angular/core';
import { IResumeCattle } from '../../../models/cattleResume.model';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {

  loading: boolean = true;
  listCattles: IResumeCattle[] = [];

  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
      this._apiService.getResume().subscribe((data: IResumeCattle[]) => {
        this.listCattles = data;
        this.loading = false;
      })
  }

  navegate(id: number): void {
    this._router.navigate(['cattle',id])
  }
}
