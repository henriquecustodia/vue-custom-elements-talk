import React, { Component } from 'react';

class App extends Component {

  componentWillMount() {
    this.events = [
      {
        title: 'Formatura',
        date: new Date(2018, 11, 7)
      },
      {
        title: 'Criciúma Dev',
        date: new Date(2018, 11, 8)
      }
    ];
  }

  xEvent(event) {
    const title = event.detail[0];

    alert('O evento ' + title + ' foi clicadoooo');
  }

  setupXComponent(ref, event) {
    ref.title = event.title;
    ref.date = event.date;

    ref.addEventListener('x-event', event => this.xEvent(event));
  }

  render() {
    return (
      <div>
        {
          this.events.map((event, index) => {
            return (
              <x-component
                ref={ref => this.setupXComponent(ref, event)}
                key={index}>
              </x-component>
            )
          })
        }
      </div>
    );
  }
}

export default App;
