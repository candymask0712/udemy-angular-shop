import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-project';
  // @Input() location: string

  location: string = 'recipe';
  getLocation (info: string){
    console.log('info(app.component): ', info)
    // if(info === 'recipe') this.location = 'recipe'
    // else if(info === 'list') this.location = 'list'
    this.location = info;
  }
}
