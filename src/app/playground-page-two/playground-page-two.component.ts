import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-playground-page-two',
  templateUrl: './playground-page-two.component.html',
  styleUrls: ['./playground-page-two.component.css']
})
export class PlaygroundPageTwoComponent {

  constructor(private snackBar: MatSnackBar) { }
  events: string[] = [];
  maxDate = new Date();

  minDate = new Date(1995, 5, 16);
 
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    console.log(this.events);
  }

  logChange(index: number){
    console.log(index);
  }

  openSnackBar(message: string, action: string){
    let snackBarRef = this.snackBar.open(message, action, {duration: 3000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('the snackbar was dismissed')
    })

    snackBarRef.onAction().subscribe(() => {
      console.log('the snackbar action was triggered')
    })
  }

}
