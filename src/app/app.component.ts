import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-master-class';
  op1: number = null
  op2: number = null

  operator: string = null
  result: number = null
  needClear: boolean = false

  addValue(val: number) {
    if (this.needClear) {
      this.clear()
    }
    if (!this.op1) {
      this.op1 = val
    } else if (!this.op2) {
      this.op2 = val
    } else {
      this.op1 = val
      this.op2 = null
    }
  }

  setOperator(ops: string) {
    if (this.needClear) {
      this.clear()
    }
    this.operator = ops
  }

  calc() {
    if (this.op1 !== null && this.op2 !== null && this.operator !== null) {
      if (this.operator === '+') {
        this.result = this.op1 + this.op2
      } else if (this.operator === '-' ) {
        this.result = this.op1 - this.op2
      } else if (this.operator === '*') {
        this.result = this.op1 * this.op2
      } else {
        this.result = this.op1 / this.op2
      }
      this.needClear = true
    }
  }

  clear() {
    this.op1 = null
    this.op2 = null
    this.operator = null
    this.result = null
    this.needClear = false
  }
}
