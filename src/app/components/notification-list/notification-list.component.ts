import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {
  public notifications = [
    {
      message: 'Upload the invoice',
      from: { name: 'User 1' },
      description: 'Upload the file here',
      actions: [
        {
          control: 'file',
          config: {},
        },
      ],
    },
    {
      message: 'Here is the report',
      from: { name: 'User 2' },
      actions: [
        {
          control: 'download',
          config: {},
        },
      ],
      attachments: [
        {
          name: 'report.pdf',
          url: 'https://files.server.com/report.pdf',
        },
      ],
    },
    {
      message: 'Employees want to work from home',
      from: { name: 'User 1' },
      description: 'Should we allow this',
      actions: [
        {
          control: 'button',
          config: {
            label: 'Yes',
          },
        },
        {
          control: 'button',
          config: {
            label: 'No',
          },
        },
      ],
    },
  ];

  public showNotif: any = {};

  constructor() {}

  ngOnInit(): void {
    this.initializeShowNotification();
  }

  private initializeShowNotification() {
    if (!this.notifications.length) return;

    this.notifications.forEach((notif, index) => {
      this.showNotif[index] = false;
    });
  }

  public toggleNotif(index: number) {
    this.showNotif[index] = !this.showNotif[index];
  }
}
