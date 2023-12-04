import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Data } from 'src/app/model/data.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  listForm: FormGroup;
  isEdit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data
  ) {
    this.listForm = this.formBuilder.group({
      id: [''],
      img: [''],
      color: [''],
      price: [''],
      saleOff: [''],
      name: [''],
      description: ['']
    });

    if (data) {
      this.isEdit = true;
      this.listForm.patchValue({
        id: data.id || '',
        img: data.img || '',
        color: data.color || '',
        price: data.price || '',
        saleOff: data.saleOff || '',
        name: data.name || '',
        description: data.description || ''
      });
    }
  }

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  async addOrUpdate(): Promise<void> {
    if (this.listForm.valid) {
      const formValue = this.listForm.value;

      try {
        if (this.isEdit) {
          await this.apiService.put(formValue);
          console.log('updated');
        } else {
          await this.apiService.post(formValue);
          console.log('added');
        }
        this.dialogRef.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
}