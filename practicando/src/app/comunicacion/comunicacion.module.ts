import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import {MatInputModule} from '@angular/material/input'; 
import {MatListModule} from '@angular/material/list'; 

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule

  ]
})
export class ComunicacionModule { }
