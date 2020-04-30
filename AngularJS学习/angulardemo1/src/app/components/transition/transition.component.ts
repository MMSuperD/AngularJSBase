import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  @ViewChild("slide")  slide:any
  constructor() { }

  ngOnInit(): void {
  }

  showAnimation():void{

    this.slide.nativeElement.style.transform = "translate(0,0)"
  }

  hiddenAnimation():void{
    this.slide.nativeElement.style.transform = "translate(100%,0)"
  }

}
