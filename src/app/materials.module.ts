import {NgModule} from '@angular/core'
import {MatInputModule} from '@angular/material/input'
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';

const MATERIAL = [ MatInputModule, MatButtonModule, MatIconModule];

@NgModule({
imports: MATERIAL,
exports: MATERIAL
})

export class MaterialModule{ }