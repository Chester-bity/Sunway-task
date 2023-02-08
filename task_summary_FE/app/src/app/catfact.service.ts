import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CatfactService {

  constructor() {

  }

  async getCatfact() {
    return await axios.get('https://catfact.ninja/fact')
      .then(function (response) { return response?.data?.fact })
      .catch(function (error) { })
  }
}
