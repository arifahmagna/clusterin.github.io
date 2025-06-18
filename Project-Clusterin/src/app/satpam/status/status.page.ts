import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  tab: string = 'masuk'

  constructor() { }

  ngOnInit() { }

  segmentChanged(event: any) {
  (document.activeElement as HTMLElement)?.blur(); // cegah warning
  this.tab = event.detail.value;
}


}