import { Component, Input, OnInit } from '@angular/core';

enum ControlType {
  Download = 'download',
  File = 'file',
  Button = 'button',
}

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  @Input() actions: any;
  @Input() description: any;
  @Input() attachments: any;

  public ControlType = ControlType;

  constructor() {}

  ngOnInit(): void {
    console.log(this.actions);
  }
}
