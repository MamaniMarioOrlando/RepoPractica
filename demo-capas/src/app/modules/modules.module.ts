import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackFutureComponent } from './back-future/back-future.component';
import { DocBrowComponent } from './back-future/doc-brow/doc-brow.component';
import { MartyComponent } from './back-future/marty/marty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [BackFutureComponent, DocBrowComponent, MartyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class ModulesModule { }
