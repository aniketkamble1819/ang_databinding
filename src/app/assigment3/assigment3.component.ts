import { Component } from '@angular/core';

@Component({
  selector: 'app-assigment3',
  templateUrl: './assigment3.component.html',
  styleUrls: ['./assigment3.component.css']
})
export class Assigment3Component {
  quarter:any = ["quarter1"];
  month:any = ["apr"];
  quarters = ["quarter1","quarter2","quarter3","quarter4"];
  months = ["apr","may","jun"];

  quarterChange(){

    if(this.quarter == "quarter1"){
         this.months = ["apr","may","jun"];
         this.month = ["apr"]

    }
    else if(this.quarter == "quarter2"){
      this.months = ["jully","aug","sep"];
      this.month = ["jully"]


    }
    else if(this.quarter == "quarter3"){
      this.months = ["oct","nov","des"];
      this.month = ["oct"]


    }
    else if(this.quarter == "quarter4"){
      this.months = ["jan","feb","march"];
      this.month = ["jan"]


    }
    

    
  }


  

}
