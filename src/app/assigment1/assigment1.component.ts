import { Component } from '@angular/core';

@Component({
  selector: 'app-assigment1',
  templateUrl: './assigment1.component.html',
  styleUrls: ['./assigment1.component.css']
})
export class Assigment1Component {
  month = [];
  months = ["jan","feb","march","april","may","jun","jully","aug","sep","oct","nov","dec"]
  // name = "soyab";
  monthchange(event:Event){
    alert("you selected")
  }

}
