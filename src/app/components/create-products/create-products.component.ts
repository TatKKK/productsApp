import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ModalService } from '../../services/modal.service';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css'
})
export class CreateProductsComponent implements OnInit {

  
  constructor(
    private productService:ProductService,
    private modalService:ModalService){}

    form = new FormGroup({
      title: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  
    get title() {
      return this.form.controls.title as FormControl
    }
  
    ngOnInit(): void {
    }
  
    submit() {
      this.productService.create({
        title: this.form.value.title as string,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 42,
          count: 1
        }
      }).subscribe(() => {
        this.modalService.close()
      })
    }
  }