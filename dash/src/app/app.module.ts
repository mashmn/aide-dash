import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { FileExplorerComponent } from './components/file-explorer/file-explorer.component';
import { UploadModule } from './modules/upload/upload.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FileExplorerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
