import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyFirstApp';
  buttonText: string = "My Button";
  person: string;
  constructor(){
    function abc(person){
      return "Hello, " + person
    } 
    let userName = 'Ganesh Jagtap';
    // document.body.innerHTML = abc(userName);
    // document.getElementsByClassName('abcdef')[0].innerHTML = abc(userName);
  }
  // abc(person){
  //   return "Hello, " + person;
  //   let userName = 'Ganesh Jagtap'
  // }
    clickFn($Event){
      console.log('Ganesh Jagtap')
      alert('abcd')
      document.getElementsByClassName('abcdef')[0].innerHTML = "Ganesh Jagtap";
    }
}
