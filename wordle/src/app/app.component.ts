import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  actualResult='AUDIO';

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

  rowIndex=0;
  currentRowIndex=0;

  handleChange(key: any){

  // backspace
  if (key === 'BACKSPACE') {
    if(this.currentRowIndex > 0) {
      this.clearKeyIndex();
    }
    return;
  }

  // enter
  if (key === 'ENTER') {
    this.submitData()
    return;
  }

  // normal

    console.log(key)
    if(this.currentRowIndex < 5 && this.rowIndex < 6) {
      this.boxes[this.rowIndex][this.currentRowIndex]={class:'', key: key};
      console.log({box: this.boxes});
      this.currentRowIndex++;
    }
  }

  clearKeyIndex() {
    this.boxes[this.rowIndex][this.currentRowIndex - 1]={class:'', key: ''};
    this.currentRowIndex--;
    console.log({currentIndex: this.currentRowIndex, box: this.boxes})
  }

  submitData(){

    let clonedCopyOfActualGuess = this.actualResult;

    // AUDIO
    console.log("data submitted, ENTER pressed");
    if (this.currentRowIndex === 5 && this.rowIndex < 6) {
      let guessedString = this.boxes[this.rowIndex].map((item) => {
        return item.key
        // ['A', 'U', 'D', 'I', 'O']
      }).join('')
      console.log({guessedString})
      if (this.actualResult === guessedString) {
        alert('Congratulation!')
        return;
      }

      // colors
      this.boxes[this.rowIndex].map((item, index) => {
        if(item.key === this.actualResult[index]) {
          item.class=`limegreen`;
          clonedCopyOfActualGuess = clonedCopyOfActualGuess.replace(item.key, '');
        }
      })

      this.boxes[this.rowIndex].map((item, index) => {
        if(clonedCopyOfActualGuess.includes(item.key)) {
          item.class=`gold`;
        }
      })

      this.boxes[this.rowIndex].map((item, index) => {
        if(item.class === '') {
          item.class=`grey`;
        }
      })

      console.log({boxes: (this.boxes)})

    }
  }
}
