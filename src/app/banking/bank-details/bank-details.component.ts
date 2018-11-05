import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent  {
selectedBankDetails='';
 dispDetails(bankDetails:string){
   console.log("In Bank Details"+bankDetails);
   this.selectedBankDetails = bankDetails;
 }

 setSelectedBank(passedbankName:string){
  console.log("TEST Passed bank from event emitted is -->"+passedbankName);
  this.selectedBankDetails = passedbankName;
 }
}
