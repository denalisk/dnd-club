import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';

import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberTileComponent } from './member-tile/member-tile.component';
import { AboutComponent } from './about/about.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { HomeComponent } from './home/home.component';
import { ClassPipe } from './class.pipe';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
}

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberDetailComponent,
    MemberTileComponent,
    AboutComponent,
    EditMemberComponent,
    CreateMemberComponent,
    HomeComponent,
    ClassPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
