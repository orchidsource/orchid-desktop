import { Pipe, PipeTransform } from '@angular/core';


/**
 * Transforms an object to an array of objects of the form {key:'keyname', value: 'value'}
 *
 * Used to enable iterating over object values
 */
@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Object.keys(value)
      .filter(key => value.hasOwnProperty(key))
      .map(key => { return { key: key, value: value[key] }});
  }
}
