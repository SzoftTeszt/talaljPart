import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(tomb:any[], mezo:string, irany:number): any {
    console.log("mező:", mezo)
    console.log("irany:", irany)
    if (!tomb || tomb.length==0) return []
    if (!mezo) return tomb

    return tomb.sort(
      (a:any,b:any)=>{
        console.log(Math.sign(a[mezo]- b[mezo]))
        return Math.sign( Number(a[mezo])-Number(b[mezo]) )*irany
        return 0;
      }
    )

    return null;
  }

}
