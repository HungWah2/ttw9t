import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Observable } from 'rxjs';
import { Data } from '../model/data.model';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  data: Data[] = [];
  itemList: any = [];

  itemList$: Observable<Data[]> = new Observable();

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.get();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.get();
      this.dialog.closeAll();
    });
  }

  openEditDialog(data: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe(result => {
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
    this.apiService.delete(id).then((res) => {
      console.log(res);
      this.get();
    });
  }

 
}
