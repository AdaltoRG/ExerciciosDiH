import { Component } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(public generalService:GeneralService){}
email:string='';
password:string='';
}
