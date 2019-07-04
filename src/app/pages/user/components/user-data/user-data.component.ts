import {AfterContentInit, AfterViewChecked, Component, Input, OnInit, Optional} from '@angular/core';
import {UserInterface} from '../../../../interfaces/index';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit, AfterViewChecked {

  @Input() user: UserInterface;

  constructor(@Optional() private parent: UserComponent) {
  }

  ngOnInit() {
  }


  ngAfterViewChecked() {
    this.parent.user = {...this.user};
  }

}
