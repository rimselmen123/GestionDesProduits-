import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    console.log("holla");//utulisation  de pipe c'est  vraiments  utulisable  que enyoyer une events pa keyup
    return list ? list.filter(item =>
      item.nomProduit.toLowerCase().includes(filterText)) : [];
  }
}
