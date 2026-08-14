import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router"
import { HeaderComponent } from "../../shared/header-component/header-component";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
