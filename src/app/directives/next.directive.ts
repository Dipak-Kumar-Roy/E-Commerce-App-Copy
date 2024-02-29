import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFunc(){
    console.log(this.el.nativeElement)
    let elm = this.el.nativeElement.parentElement.parentElement.children[0];
    console.log(elm)
    let item= elm.getElementsByClassName("item");
    console.log(item)
  elm.append(item[0]);
  }
}


// import { Directive, ElementRef, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appNext]'
// })
// export class NextDirective {

//   constructor(private el: ElementRef) { }

//   @HostListener('click')
//   nextFunc() {
//     const parentElement = this.el.nativeElement.parentElement.parentElement.children[0];
//     const items = parentElement.getElementsByClassName("item");

//     if (items.length > 0) {
//       // Get the last item and move it to the beginning
//       const lastItem = items[items.length - 1];
//       parentElement.insertBefore(lastItem, items[0]);
//     }
//   }
// }
