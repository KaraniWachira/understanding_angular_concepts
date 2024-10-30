import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Products} from "../models/products-interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //variable of the api base url
  private baseUrl = 'https://fakestoreapi.com/products?limit=7';


  constructor(
    private http: HttpClient
  ) { }

  // methods to access the api
  getAllProductsWithLimit(limit = 5) {
    const productsUrl: string = `${this.baseUrl}'products?limit'= ${limit}`;
    return this.http.get<Array<Products>>(productsUrl)
  }

  // post a new product
  creatProduct(product: Products) {
    const productUrl = `${this.baseUrl}productsisisisis`;
    return this.http.post<Products>(productUrl, product);
  }


}









