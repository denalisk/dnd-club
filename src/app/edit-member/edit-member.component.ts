import { Component, OnInit, Input } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from '../member.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  public member: FirebaseObjectObservable<any>;
  public isEditing: boolean = false;
  @Input() targetMember: Member;
  @Input() heldData: Member;
  @Input() memberId: string;


  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.member = this.memberService.getMemberById(this.memberId);
  }

  alertData() {
    alert(this.heldData.name + " plays a " + this.heldData.characterName);
  }

  editButtonClick() {
    if (this.isEditing) {
      this.targetMember = this.heldData;
    }
    this.isEditing = (!(this.isEditing));
  }

}
