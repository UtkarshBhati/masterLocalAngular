import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import { Bank } from '../bank.model';
@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent  {
  @Output() triggerBankDetailsPopulation = new EventEmitter<string>();
  banks : Bank[]=[
    new Bank(1,'ICICI','BANK'),
    new Bank(2,'SBI','BANK'),
    new Bank(3,'IDBI','BANK')
  ]
  @Input() selectedBank = Bank;
  //  [
  //    {"bName":"ICICI", "lastName":"Bank"}, 
  //   {"bName":"IDBI", "lastName":"Bank"},
  //   {"bName":"SBI", "lastName":"Bank"}
  //  ]; 
  
   
   name : string = "TEST";
  constructor() { }

 displayBankDetails(bank:string){
   console.log("Banks Component: value of selectedBank:: "+this.selectedBank);
  console.log("Banks Component: displayBankDetails Selected bank is :"+bank);
  this.triggerBankDetailsPopulation.emit(bank);
 }
  
}
