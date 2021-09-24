import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.scss']
})
export class HitComponent implements OnInit {

  @Input()
  hit: any;

  constructor() { }

  ngOnInit(): void {
  }

}
