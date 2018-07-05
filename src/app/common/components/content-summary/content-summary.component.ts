import { Component, OnInit, Input } from '@angular/core';
import { NO_OF_LINKS } from '../../utility/app-contants';

@Component({
  selector: 'app-content-summary',
  templateUrl: './content-summary.component.html',
  styleUrls: ['./content-summary.component.scss']
})
export class ContentSummaryComponent implements OnInit {

  @Input()
  header: any;
  @Input()
  content_array: any[];
  @Input()
  moreLinkNavPath: string;
  showMoreLink: boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.moreLinkNavPath && this.content_array && this.content_array.length > NO_OF_LINKS) {
      this.showMoreLink = true;
    }
  }

}
