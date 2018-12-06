import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  events = [
    {
      title: 'Formatura',
      date: new Date(2018, 11, 7)
    },
    {
      title: 'Criciúma Dev',
      date: new Date(2018, 11, 8)
    }
  ];

  xEvent(event) {
    const title = event.detail[0];
    
    alert('O evento ' + title + ' foi clicadoooo');
  }
}
