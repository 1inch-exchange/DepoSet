import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TradeFormComponent} from './trade-form/trade-form.component';
import {UtilModule} from '../util/util.module';
import {RouterModule} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  ButtonModule,
  CardModule,
  CodeHighlighterModule,
  DialogModule,
  DropdownModule,
  InputTextModule,
  TabViewModule
} from 'primeng/primeng';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    UtilModule,
    InputTextModule,
    FormsModule,
    BrowserModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    FontAwesomeModule,
    DropdownModule,
    CardModule,
    DialogModule
  ],
  declarations: [TradeFormComponent],
  exports: [TradeFormComponent]
})
export class TradeModule {
}
