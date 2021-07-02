import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighligth]',
})
export class BetterHighligthDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highligthColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   'background-color',
    //   'blue',
    //   null
    // );

    this.backgroundColor = this.highligthColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   'background-color',
    //   'transparent',
    //   null
    // );
    this.backgroundColor = this.defaultColor;
  }
}
