import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() location = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  getLocation (info: string) {
    console.log('info', info)
    this.location.emit(info)
    // if(info==='recipe') this.location.emit('recipe')
    // else this.location.emit('list')
  }
}
