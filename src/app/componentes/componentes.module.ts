import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { MetricComponent } from './metric/metric.component';
import { RouterModule } from '@angular/router';
import { CustomCardComponent } from './custom-card-personal/custom-card-personal.component';
import { CustomTitleComponent } from './custom-title/custom-title.component';
import { SliderComponent } from './slider/slider.component';
import { CustomCardProgramsComponent } from './custom-card-programs/custom-card-programs.component';


@NgModule({
  declarations: [
    CustomInputComponent,
    HeaderComponent,
    UserComponent,
    MetricComponent,
    CustomCardComponent,
    CustomTitleComponent,
    SliderComponent,
    CustomCardProgramsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CustomInputComponent,
    HeaderComponent,
    UserComponent,
    MetricComponent,
    CustomCardComponent,
    CustomTitleComponent,
    SliderComponent,
    CustomCardProgramsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentesModule { }
