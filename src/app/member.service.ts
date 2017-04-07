import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire){
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  getMemberById(targetId: string) {
    return this.angularFire.database.object('members/' + targetId);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(updatedMember: Member, targetId: string) {
    let dbMember = this.getMemberById(targetId);
    dbMember.update({name: updatedMember.name,
    characterName: updatedMember.characterName,
    playerClass: updatedMember.playerClass,
    race: updatedMember.race,
    level: updatedMember.level,
    experience: updatedMember.experience,
    backstory: updatedMember.backstory});
  }

  deleteMember(targetId: string) {
    let dbMember = this.getMemberById(targetId);
    dbMember.remove();
  }

}
