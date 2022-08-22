import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  keyboad=[
    {key: 'Q', class: ''},
    {key: 'W', class: ''},
    {key: 'E', class: ''},
    {key: 'R', class: ''},
    {key: 'T', class: ''},
    {key: 'Y', class: ''},
    {key: 'U', class: ''},
    {key: 'I', class: ''},
    {key: 'O', class: ''},
    {key: 'P', class: ''},
    {key: 'A', class: ''},
    {key: 'S', class: ''},
    {key: 'D', class: ''},
    {key: 'F', class: ''},
    {key: 'G', class: ''},
    {key: 'H', class: ''},
    {key: 'J', class: ''},
    {key: 'K', class: ''},
    {key: 'L', class: ''},
    {key: 'ENTER', class: ''},
    {key: 'Z', class: ''},
    {key: 'X', class: ''},
    {key: 'C', class: ''},
    {key: 'V', class: ''},
    {key: 'B', class: ''},
    {key: 'N', class: ''},
    {key: 'M', class: ''},

    {key: 'BACKSPACE', class: ''}
  ]


  boxes=[
    [{class:'', key: ''},{class:'', key: ''},{class:'', key: ''},{class:'', key: ''},{class:'', key: ''}],
    [{class:'', key: ''},{class:'', key: ''},{class:'', key: ''},{class:'', key: ''},{class:'', key: ''}],
    [{class:'', key: ''},{class:'', key: ''},{class:'', key: ''},{class:'', key: ''},{class:'', key: ''}],
    [{class:'', key: ''},{class:'', key: ''},{class:'', key: ''},{class:'', key: ''},{class:'', key: ''}],
    [{class:'', key: ''},{class:'', key: ''},{class:'', key: ''},{class:'', key: ''},{class:'', key: ''}],
    [{class:'', key: ''},{class:'', key: ''},{class:'', key: ''},{class:'', key: ''},{class:'', key: ''}],
  ]
  handleChange(key: any){
    console.log(key)
  }
}
