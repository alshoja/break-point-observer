import { BreakpointObserverService } from './../breakpoint-observer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Break-Point-Observer';
  public screenSize: any;

  constructor(private ObserverService: BreakpointObserverService) { }

  ngOnInit() {
    this.detectScreenChange();
  }

  detectScreenChange() {
    this.ObserverService.size$.subscribe(breakPoint => {
      this.screenSize = breakPoint;
    });
  }
}
