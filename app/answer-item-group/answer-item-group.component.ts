import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-answer-item-group',
  templateUrl: './answer-item-group.component.html',
  styleUrls: ['./answer-item-group.component.css']
})
export class AnswerItemGroupComponent implements OnInit {
  @Input() answerItemGroup;
  constructor() { 
    
  }

  ngOnInit() {

  }

}
