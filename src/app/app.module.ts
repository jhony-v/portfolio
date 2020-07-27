import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextBaseComponent } from './shared/components/text-base/text-base.component';
import { ButtonBaseComponent } from './shared/components/button-base/button-base.component';
import { CardImageComponent } from './shared/components/card-image/card-image.component';
import { ProfileNameCompactComponent } from './shared/components/profile-name-compact/profile-name-compact.component';
import { LinkNavigatorComponent } from './shared/components/link-navigator/link-navigator.component';
import { ListLinksNavigatorComponent } from './shared/containers/list-links-navigator/list-links-navigator.component';
import { HomeModuleComponent } from './modules/home-module/home-module.component';
import { DedicateModuleComponent } from './modules/dedicate-module/dedicate-module.component';
import { StackModuleComponent } from './modules/stack-module/stack-module.component';
import { ProjectsModuleComponent } from './modules/projects-module/projects-module.component';
import { CardPointHistoryComponent } from './shared/components/card-point-history/card-point-history.component';
import { ScrollHorizontalBehaviorComponent } from './shared/containers/scroll-horizontal-behavior/scroll-horizontal-behavior.component';
import { CardLanguageComponent } from './modules/home-module/card-language/card-language.component';
import { CircleCurrentPageComponent } from './shared/containers/circle-current-page/circle-current-page.component';
import { CircleImageComponent } from './shared/components/circle-image/circle-image.component';
import { FluidCardInformationComponent } from './shared/components/fluid-card-information/fluid-card-information.component';
import { SearchEngineComponent } from './shared/components/search-engine/search-engine.component';
import { AnimatableFadeFromBottomComponent } from './shared/components/animatable-fade-from-bottom/animatable-fade-from-bottom.component';
import { ProjectCardComponent } from './shared/components/project-card/project-card.component';
import { HttpClientModule } from "@angular/common/http";
import { SpinnerLoadingComponent } from './shared/components/spinner-loading/spinner-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBaseComponent,
    ButtonBaseComponent,
    CardImageComponent,
    ProfileNameCompactComponent,
    LinkNavigatorComponent,
    ListLinksNavigatorComponent,
    HomeModuleComponent,
    DedicateModuleComponent,
    StackModuleComponent,
    ProjectsModuleComponent,
    CardPointHistoryComponent,
    ScrollHorizontalBehaviorComponent,
    CardLanguageComponent,
    CircleCurrentPageComponent,
    CircleImageComponent,
    FluidCardInformationComponent,
    SearchEngineComponent,
    AnimatableFadeFromBottomComponent,
    ProjectCardComponent,
    SpinnerLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
