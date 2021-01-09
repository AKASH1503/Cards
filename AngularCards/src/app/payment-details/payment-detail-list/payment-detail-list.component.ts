import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';


@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [
  ]
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service:PaymentDetailService,
    private toaster:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd:PaymentDetail){
    this.service.formData= Object.assign({},pd);
  }

  onDelete(PMId){
    if(confirm('Are You Sure to Delete This record ?')){
    this.service.deletePaymentDetail(PMId)
      .subscribe(
        res=>{
          this.service.refreshList();
          this.toaster.warning('Deleted SuccessFully !!!','Payment Detail Register');
        },
        err=>{
          console.log(err);
        }    
        );
    }  }
}
