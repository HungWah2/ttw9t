import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Data } from 'src/app/model/data.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.scss']
})
export class FillComponent {
  listForm: FormGroup;
  isEdit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<FillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
    private cartService: CartService
  ) {
    this.listForm = this.formBuilder.group({
      name: [''],
      img: [''],
      color: [''],
      price: [''],
      saleOff: [''],
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
        description: data.description || '',
        quantity: data.quantity || '',
        stock: data.stock || '',
      });
    }
  }

  buyProducts(): void {
    this.cartService.removeAllCart();
    this.dialogRef.close();
    alert('Thank you for your purchase!');
  }
}
