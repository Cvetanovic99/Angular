import { Observable } from 'rxjs';
import { FinansicState, selectFinansics } from './../store/finansic-store/finansic.reducer';
import { Finansic } from './../../models/finansic';
import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { Store, select } from '@ngrx/store';
import * as fromActions from "../store/finansic-store/finansic.actions";

@Component({
  selector: 'finansic-content',
  templateUrl: './finansic-content.component.html',
  styleUrls: ['./finansic-content.component.css']
})
export class FinansicContentComponent implements OnInit {
  @Input() finance: boolean;
  months: string [] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  p: number = 1;
  finansicStatistics: Finansic [] = [{ id: 1, userId: 1, income: 354, spent: 354, date: new Date()}];
  user: User;
  finansicsFromStore: Finansic [];
  statistics: boolean = false;
  notSelectedYOrM: boolean = false;
  finansicStatisticsForOneMonth: Finansic [] = [];
  totalSpent: number = 0;
  totalIncome: number = 0;
  totalState: number = 0;

  constructor(private store: Store<FinansicState>) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('user'));
    this.store.dispatch( fromActions.loadFinansics({ userId: this.user.id }));
    this.loadFinansics();
  }

  loadFinansics() {
    this.store.pipe( select(selectFinansics) ).subscribe( response => {
      this.finansicsFromStore = response;
      console.log(this.finansicsFromStore);
    })
  }

  addFinansic(spent: HTMLInputElement, income: HTMLInputElement) {

    let date = new Date();
    date.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    let newFinansic = {
      id: undefined,
      userId: this.user.id,
      income: parseInt(income.value),
      spent: parseInt(spent.value),
      date: date
    }

    let newFinansic354 = new Finansic(undefined, this.user.id, parseInt(income.value), parseInt(spent.value), date);

    this.store.dispatch( fromActions.addFinansic({ finansic: newFinansic354 }));
    console.log(newFinansic);


  }

  showStatistics(month: HTMLSelectElement, year: HTMLInputElement) {

    console.log(month.selectedIndex, year.value);
    if(month.selectedIndex == 0 || year.value == "") {

      this.notSelectedYOrM = true;
    } else {

      this.finansicStatisticsForOneMonth = [];
      this.totalSpent = 0;
      this.totalIncome = 0;
      this.totalState = 0;

      this.finansicsFromStore.forEach(finansic => {

        let dateString = finansic.date.toString();
        console.log(dateString.substring(0, 4) + "-" + dateString.substring(5, 7));

        if(parseInt(dateString.substring(0, 4)) == parseInt(year.value) && parseInt(dateString.substring(5, 7)) == month.selectedIndex) {

          this.finansicStatisticsForOneMonth.push(finansic);
          this.totalSpent += finansic.spent;
          this.totalIncome += finansic.income;
        }
      });

      this.totalState = this.totalIncome - this.totalSpent;

      if(this.statistics == false) {
        this.statistics = !this.statistics;
      }
      console.log(this.finansicStatisticsForOneMonth);
    }
  }

  chageNotSelectedYOrM() {
    if(this.notSelectedYOrM == true) {
      this.notSelectedYOrM = !this.notSelectedYOrM;
    }
  } 

}
