import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(partnerek:any[], keresendo:string ): any {
    if (!partnerek || partnerek.length==0) return null;
    if (!keresendo) return partnerek
    return partnerek.filter(
      (a)=> {
        const k = (a.name+a.introductions).toLowerCase()
        return k.includes(keresendo.toLowerCase())
      } 
      )
  
  }

}
