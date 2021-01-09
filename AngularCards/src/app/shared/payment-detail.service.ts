import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail = {
    PMId :null,
    CardOwnerName: null,
    CardNumber: null,
    ExpirationDate: null,
    CVV: null
  }

  readonly rootUrl='http://localhost:63399/api';

  list:PaymentDetail[];

  constructor(private Http:HttpClient) { }

  postPaymentDetail(){
    return this.Http.post(this.rootUrl+'/PaymentDetail',this.formData);
  }
  
  putPaymentDetail(){
    return this.Http.put(this.rootUrl+'/PaymentDetail/'+this.formData.PMId,this.formData);
  }

  deletePaymentDetail(id){
    return this.Http.delete(this.rootUrl+'/PaymentDetail/'+id);
  }

  refreshList(){
    this.Http.get(this.rootUrl+'/PaymentDetail')
    .toPromise()
    .then(res=>this.list=res as PaymentDetail[]);
  }
}
