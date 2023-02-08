import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }

  async getActivity() {
    return await axios.get('https://www.boredapi.com/api/activity')
      .then(function (response) { return response?.data })
      .catch(function (error) { })
  }

}
