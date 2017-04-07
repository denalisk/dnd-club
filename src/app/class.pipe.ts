import { Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from './member.service';

@Pipe({
  name: 'classPipe',
  pure: false
})
export class ClassPipe implements PipeTransform {

  constructor(private memberService: MemberService, private angularFire: AngularFire){}

  transform(input: any[], targetClass: string): any {
    // let output: any[];
    // if (targetClass !== 'Any') {
    //   return this.angularFire.database.list('members', { query: { orderByChild: 'playerClass', equalTo: targetClass}});
    // } else {
    //   console.log(this.angularFire.database.list('members', { query: { orderByChild: 'playerClass', equalTo: targetClass}}).subscribe());
    //   return this.angularFire.database.list('members');
    // }
    let output: any[] = [];
    if (input != null) {
      if (targetClass !== 'Any') {
        for (let member of input) {
          if (member.playerClass === targetClass) {
            output.push(member);
          }
        }
      } else {
        for (let item of input) {
          output.push(item);
        }
      }
    }
    return output;
  }
}
