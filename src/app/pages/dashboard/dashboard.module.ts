import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardComponent } from './dashboard.component';
import { ProfitCardComponent } from './profit-card/profit-card.component';
import { StatsCardFrontComponent } from './profit-card/front-side/stats-card-front.component';
import { StatsBarAnimationChartComponent } from './profit-card/front-side/stats-bar-animation-chart.component';
import { StatsAreaChartComponent } from './profit-card/back-side/stats-area-chart.component';
import { StatsCardBackComponent } from './profit-card/back-side/stats-card-back.component';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
  ],
  declarations: [
    DashboardComponent,
    ProfitCardComponent,
    StatsCardFrontComponent,
    StatsCardBackComponent,
    StatsBarAnimationChartComponent,
    StatsAreaChartComponent
  ],
})
export class DashboardModule { }
