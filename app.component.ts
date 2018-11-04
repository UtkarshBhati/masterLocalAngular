import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Root Component of the New Investment App Works !';
  displayedFeature = '';
  //Catching the event emitted from header comp on click of investment or banks
  displaySelected(selection:string){
    this.displayedFeature = selection;
  }

  selectedBankDetails="";
 selectedBank(bankDetails:string){
  console.log("Bank Details passed are -->"+bankDetails);
    this.selectedBankDetails = bankDetails;
    //this.trigBankDetails.emit(bankDetails);
  }

  //On trigger of displayBankDetails, trying to trigger event to be caught in bank details component
  //@Output() trigBankDetails = new EventEmitter<string>();

}
