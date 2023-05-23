import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BlockComponent } from "./block/block.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
  BlockComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
