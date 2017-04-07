import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classPipe',
  pure: false
})
export class ClassPipe implements PipeTransform {

  transform(input: any[]): any {
    let targetClass = 'Barbarian';
    let output: any[] = [];
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
    return output;
  }

}
