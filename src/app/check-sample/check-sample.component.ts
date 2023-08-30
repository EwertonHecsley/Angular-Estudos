import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})


export class CheckSampleComponent implements
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {

  quantidade: number = 0

  constructor() {
    console.log('constuctor')
  }

  adicionar() {
    this.quantidade += 1
  };

  remover() {
    this.quantidade -= 1
  }

  ngOnInit(): void {
    console.log('onInit')
  };

  ngDoCheck(): void {
    console.log('ngDoChek')
  }

  ngAfterContentChecked(): void {
    console.log('afterContetCheck')
  };

  ngAfterContentInit(): void {
    console.log('ngAftcontent')
  };

  ngAfterViewChecked(): void {
    console.log('afterviwCheck')
  };

  ngAfterViewInit(): void {
    console.log('ngAfterviewinit')
  };

  ngOnDestroy(): void {
    console.log('Destroy')
  }

}
