import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../common-service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-product-list',
  templateUrl: './add-product-list.component.html',
  styleUrl: './add-product-list.component.css'
})
export class AddProductListComponent {
  constructor(private fb: FormBuilder, private sellerService: ServiceService, private router : Router, private activateRoute : ActivatedRoute) {}

  addProduct!: FormGroup;

  isPassword: any;
  isEdit : any = false;

  ngOnInit(): void {
    this.addProduct = this.fb.group({

      name : [null , Validators.required],
      price : [null, Validators.required],
      category : [null, Validators.required],
      color : [null, Validators.required],
      description : [null, Validators.required],
      image : [null, Validators.required],
      id : [null, Validators.required]
    });

    this.getData();
    
  }

  getData(){
    this.activateRoute.queryParams.subscribe((res : any)=>{
      if(res?.id){
        this.isEdit = true;
        this.sellerService.getProductDataById(res.id).subscribe((res: any)=>{
          console.log(res)
          this.addProduct.patchValue(res);
        })
  
      }
    })
  }

  onSubmit() {
    if(this.addProduct.valid)
      {
        console.log(this.addProduct.value);
        this.sellerService.addProduct(this.addProduct.value);
        this.router.navigate(['seller-home'])
      }

  }
  OnEdit()
  {
    if(this.addProduct.valid)
      {
        console.log(this.addProduct.value);
        this.sellerService.updateProduct(this.addProduct.value);
        this.router.navigate(['seller-home'])
      }
  }
  
}
