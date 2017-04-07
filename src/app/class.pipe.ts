import { Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Pipe({
  name: 'classPipe',
  pure: false
})
export class ClassPipe implements PipeTransform {

  transform(input: any[], targetClass: string): any {
    let output: any[] = null;
    if (input !== null) {
      // if (targetClass !== 'Any') {
      //   for (let member of input) {
      //     if (member.playerClass === targetClass) {
      //       output.push(member);
      //     }
      //   }
      // } else {
      //   for (let item of input) {
      //     output.push(item);
      //   }
      // }
      for (let item of input) {
          output.push(item);
      }
    }
    return output;
  }
}
