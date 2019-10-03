import {NgModule} from '@angular/core'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';

const MATERIAL = [ MatInputModule, MatButtonModule, MatIconModule,MatDatepickerModule, MatToolbarModule];

@NgModule({
imports: MATERIAL,
exports: MATERIAL
})

export class MaterialModule{ }