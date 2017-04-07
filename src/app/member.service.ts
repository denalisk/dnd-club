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

  updateMember(targetMember) {
    let dbMember = this.getMemberById(targetMember.$key);
    dbMember.update({name: targetMember.name,
    characterName: targetMember.characterName,
    playerClass: targetMember.playerClass,
    race: targetMember.race,
    level: targetMember.level,
    experience: targetMember.experience,
    backstory: targetMember.backstory});
  }

  deleteMember(targetMember) {
    let dbMember = this.getMemberById(targetMember.$key);
    dbMember.remove();
  }

}
