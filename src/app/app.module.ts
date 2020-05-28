import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextBaseComponent } from './shared/components/text-base/text-base.component';
import { ButtonBaseComponent } from './shared/components/button-base/button-base.component';
import { CircleViewCompactComponent } from './shared/components/circle-view-compact/circle-view-compact.component';
import { CardImageComponent } from './shared/components/card-image/card-image.component';
import { ProfileNameCompactComponent } from './shared/components/profile-name-compact/profile-name-compact.component';
import { LinkNavigatorComponent } from './shared/components/link-navigator/link-navigator.component';
import { ListLinksNavigatorComponent } from './shared/containers/list-links-navigator/list-links-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBaseComponent,
    ButtonBaseComponent,
    CircleViewCompactComponent,
    CardImageComponent,
    ProfileNameCompactComponent,
    LinkNavigatorComponent,
    ListLinksNavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
