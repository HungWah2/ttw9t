import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Dialog } from '@angular/cdk/dialog';
import { Data } from '../model/data.model';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent {
  data: Data[] = [];

  constructor(private apiService: ApiService, private dialog: Dialog) {}

  ngOnInit(): void {
    
  }

  deleteItem(id: any) {
    
  }

  cancel() {
    this.dialog.closeAll();
  }
}
