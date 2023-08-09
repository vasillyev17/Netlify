import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, search: string): string {
    if (!value || !search || search.length === 0) {
      return value;
    }

    const lowerKeywords = search.split(' ').map(keyword => keyword.toLowerCase());
    const regex = new RegExp(`(${lowerKeywords.join('|')})`, 'gi');

    return value.replace(regex, match => `<span class="highlight">${match}</span>`);
  }
}
