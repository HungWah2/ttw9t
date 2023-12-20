import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Observable } from 'rxjs';
import { Data } from '../model/data.model';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChoiceComponent } from '../choice/choice.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  data: Data[] = [];
  searchKey: string = '';

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.get();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.get();
      this.dialog.closeAll();
    });
  }

  openEditDialog(data: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.get();
      this.dialog.closeAll();
    });
  }

  async get() {
    try {
      this.data = await this.apiService.get();
      console.log(this.data);
    } catch (error) {
      console.error(error);
    }
  }

  delete(id: number) {
    if(confirm('Are you sure to delete this record?')){
      this.apiService.delete(id);
      this.get();
    } else {
      this.get();
    }
  }
}
