import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from "../member.service";
import { Member } from '../member.model';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css'],
  providers: [MemberService]
})
export class CreateMemberComponent implements OnInit {

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
  }

  saveMember(name: string, playerClass: string, characterName: string, race: string, backstory: string) {
    var newMember = new Member(name, playerClass, characterName, race, backstory);
    this.memberService.addMember(newMember);
    this.router.navigate(['members']);
  }

}
