import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Product } from '../models/product';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    console.log('dashboard');
    this.getProducts();

  }

  getProducts() {
    this.dashboardService.getProducts()
      .pipe(first())
      .subscribe(
        data => {
          this.products = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  likeProduct(id: number) {
    console.log('like clicked ...........');
    this.dashboardService.likeProduct(id)
      .pipe(first())
      .subscribe(
        data => {
          this.products.forEach(product => {
            if (product.id == data.id) {
              product.likes = data.likes;
            }
          });
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

}

