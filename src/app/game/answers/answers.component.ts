import { Component } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent {
  possibleAnswers = ['test', 'test2', 'test3', 'test4']
}
