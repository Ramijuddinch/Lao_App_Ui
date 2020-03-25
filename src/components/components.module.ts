import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
	declarations: [HeaderComponent],
	imports: [IonicModule,HttpClientModule],
	exports: [HeaderComponent],
	entryComponents:[HeaderComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ComponentsModule {}
