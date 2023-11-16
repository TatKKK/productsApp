import { Component} from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';
import { Observable, tap } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
