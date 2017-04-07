import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from '../member.service';
import { MemberTileComponent } from '../member-tile/member-tile.component';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService]
})
export class MemberListComponent implements OnInit {
  public urlString: string;
  public members: FirebaseListObservable<any[]>;
  public testString: string = "Hey this is a test";

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
    this.urlString = this.router.url;
  }

}
