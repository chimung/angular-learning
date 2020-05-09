import { Component } from '@angular/core';

import { DataModel, TShirtModel } from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: TShirtModel[] = DataModel

  isShowImage: boolean = false
}
