import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from "../member.service";
import { Member } from '../member.model';
import { classList } from '../classlist';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css'],
  providers: [MemberService]
})
export class CreateMemberComponent implements OnInit {
  public newClass: string = 'Barbarian';
  public classes: string[] = classList;

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
  }

  saveMember(name: string, characterName: string, race: string, backstory: string) {
    var newMember = new Member(name, this.newClass, characterName, race, backstory);
    // var newMember = new Member('Wizard', 'Wizard', 'Wizard', 'Wizard', 'Wizard');
    this.memberService.addMember(newMember);
    this.router.navigate(['members']);
  }

}
