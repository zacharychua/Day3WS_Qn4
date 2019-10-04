import {NgModule} from '@angular/core'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

const MATERIAL = [ MatInputModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatToolbarModule, MatMomentDateModule,
    MatCheckboxModule, MatRadioModule];

@NgModule({
//imports: MATERIAL,
exports: MATERIAL
})

export class MaterialModule{ }