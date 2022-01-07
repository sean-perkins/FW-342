import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  items = [];

  ngOnInit(): void {
    this.items = Array(100).fill(undefined).map((_value, index) => `Item -- ${index} (${Date.now()})`);
  }

  onRefresh(event) {
    this.items = Array(100).fill(undefined).map((_value, index) => `Item -- ${index} (${Date.now()})`);
    setTimeout(() => {
      event.detail.complete();
    }, 2000);
  }
}
