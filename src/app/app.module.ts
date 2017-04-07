import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberTileComponent } from './member-tile/member-tile.component';
import { AboutComponent } from './about/about.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberDetailComponent,
    MemberTileComponent,
    AboutComponent,
    EditMemberComponent,
    CreateMemberComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
