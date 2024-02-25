import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  
  constructor( private el:ElementRef) { }

@HostListener('click')
nextFunc(){
  // console.log(this.el.nativeElement)
  let elm = this.el.nativeElement.parentElement.parentElement.children[0];
  let item= elm.getElementsByClassName("item");
  // console.log(item)
elm.prepend(item[item.length-1]);
}
}
