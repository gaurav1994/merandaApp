import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './subparts/header/header.component';
import { FooterComponent } from './subparts/footer/footer.component';
import { MainbodyComponent } from './subparts/mainbody/mainbody.component';
import { CarouselComponent } from './subparts/mainbody/carousel/carousel.component';
import { EditorsPickComponent } from './subparts/mainbody/editors-pick/editors-pick.component';
import { TrendingComponent } from './subparts/mainbody/trending/trending.component';
import { RecentNewsComponent } from './subparts/mainbody/recent-news/recent-news.component';
import { PopularPostsComponent } from './subparts/mainbody/popular-posts/popular-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainbodyComponent,
    CarouselComponent,
    EditorsPickComponent,
    TrendingComponent,
    RecentNewsComponent,
    PopularPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
