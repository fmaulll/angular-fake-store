import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "https://fakestoreapi.com"

  constructor() { }

  async getProducts(): Promise<Product[]> {
    const result = await fetch(`${this.url}/products`);
    if (result.status !== 200) {
      alert("Something Went Wrong!")
    }
    const data = await result.json()
    return data ?? []
  }

  async getProductById(id: number): Promise<Product | undefined> {
    const result = await fetch(`${this.url}/products/${id}`);
    if (result.status !== 200) {
      alert("Something Went Wrong!")
    }
    const data = await result.json()
    console.log(data)
    return data ?? {}
  }

  convertRupiah(value:number): string {
    return new Intl.NumberFormat("id-ID", {
      maximumSignificantDigits: 4,
      style: "currency",
      currency: "IDR",
    }).format(value * 15000);
  }

  // getHousingLocationById(id: number): HousingLocation | undefined {
  //   return this.housingLocationList.find(
  //     (housingLocation) => housingLocation.id === id
  //   );
  // }
}
