import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements AfterViewInit, OnInit{

   
  selectedProduct: Product | undefined;
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  products: Product[] = [];

  //contructor injection pattern
  constructor(private productService: ProductService){
    
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

}