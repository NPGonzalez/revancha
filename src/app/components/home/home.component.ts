import { Component, OnInit } from '@angular/core';
import { DataService } from '../../srevices/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  error: boolean = false;
  errorMessage: string;
  tutorials: any = [];
  constructor(private dataService: DataService, private router:Router ) { }

  getData() {
    this.dataService.getData()
      .subscribe((resp: any) => {
        this.tutorials = resp;
        console.log(this.tutorials);
        this.error = false;
        }, (errorService) => {
          this.error = true;
          errorService = 'Algo inesperado ocurrió. Presiona el botón Update';
          this.errorMessage = errorService;
      });
  }


  ngOnInit() {
    this.getData();
  }

  goEdit() {
    this.router.navigate(['edit']);
    console.log('Hola');

  }

}
