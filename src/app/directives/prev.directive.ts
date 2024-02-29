import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFunc(){
    console.log(this.el.nativeElement)
    let elm = this.el.nativeElement.parentElement.parentElement.children[0];
    console.log(elm)
    let item= elm.getElementsByClassName("item");
    console.log(item)
  elm.prepend(item[item.length - 1]);
  }
}



// import { Directive, ElementRef, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appPrev]'
// })
// export class PrevDirective {

//   constructor(private el: ElementRef) { }

//   @HostListener('click')
//   prevFunc() {
//     const parentElement = this.el.nativeElement.parentElement.parentElement.children[0];
//     const items = parentElement.getElementsByClassName("item");

//     if (items.length > 0) {
//       // Get the first item and move it to the end
//       const firstItem = items[0];
//       parentElement.appendChild(firstItem);
//     }
//   }
// }
