export class Bank{
    index : number;
    bName:string;
    lastName:string;
    
   constructor(index:number,bName:string,lastName:string){
        this.bName = bName;
        this.lastName = lastName;
       this.index = index;
    }
}