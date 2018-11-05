import { Component, OnInit,EventEmitter,Input,  Output} from '@angular/core';
import { Bank } from "../../bank.model";
@Component({
  selector: 'app-bank-item',
  templateUrl: './bank-item.component.html',
  styleUrls: ['./bank-item.component.css']
})
export class BankItemComponent implements OnInit {
  @Output() selectedBank = new EventEmitter<string>();
 //This will be the data coming from outside
 @Input() bank :   Bank;

  constructor() { }

  ngOnInit() {
  }
  
  onBankSelected(bankName : string){  
    console.log('BankItemComponent Selected is -->'+bankName);
    this.selectedBank.emit(bankName);
  }
  
}
