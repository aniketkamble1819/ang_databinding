import { Component } from '@angular/core';

@Component({
  selector: 'app-assigment2',
  templateUrl: './assigment2.component.html',
  styleUrls: ['./assigment2.component.css']
})
export class Assigment2Component {
  name="aniket";

  cliked(){
   alert("hello   " + this.name)
    this.name
  }
  textInput(event:Event){
    let ctr = <HTMLInputElement>event.target;
    this.name = ctr.value;

  }
}
