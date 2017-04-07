import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})
export class MemberDetailComponent implements OnInit {
  public member: FirebaseObjectObservable<any>;
  public urlString: string;
  public memberId: string;

  public detail: boolean = true;

  constructor (
                private router: Router,
                private memberService: MemberService,
                public route: ActivatedRoute,
                public location: Location
              ) { }

  ngOnInit() {
    this.route.params.forEach((params) => { this.memberId = params['id'];});
    this.member = this.memberService.getMemberById(this.memberId);
    this.urlString = this.router.url;
  }

  isAdmin() {
    return (this.urlString.slice(0,5) === 'admin');
  }

}
