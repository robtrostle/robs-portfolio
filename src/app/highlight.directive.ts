import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';

  @Input() highlightColor: string = 'blue';//now you can bind it to the dom[]

  @HostBinding('style.backgroundColor') backGroundColor: string = 'black';//binds to hosting element

  //2nd way
  @HostBinding('style.backgroundColor') backGroundColor2: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
  }

  // @HostListener('mouseenter') mouseover2(eventData: Event){
  //   this.backGroundColor = this.highlightColor;
  // }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  // @HostListener('mouseleave') mouseleave2(eventData: Event){
  //   this.backGroundColor2 = this.defaultColor;
  // }

  // @HostListener('mouseleave') mouseleave(eventData: Event){
  //   this.backGroundColor = 'red';
  // }

  

}
