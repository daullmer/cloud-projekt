import { Component, Input, OnInit } from '@angular/core';
import { HairColor, VisionApiModel } from '../types';

@Component({
  selector: 'app-ai-result',
  templateUrl: './ai-result.component.html',
  styleUrls: ['./ai-result.component.css'],
})
export class AiResultComponent implements OnInit {
  @Input() result!: VisionApiModel;
  @Input() loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  hairNumberToString(number: number): string {
    console.log(number);
    switch (number) {
      case 0:
        return 'Schwarz';
      case 1:
        return 'Braun';
      case 2:
        return 'Grau';
      case 3:
        return 'Anders';
      case 4:
        return 'Blond';
      case 5:
        return 'Rot';
      case 6:
        return 'Weiß';

      default:
        return 'unklar';
    }
  }
}
