import { Component, OnInit } from '@angular/core';

const news = [{
  "id":"1",
  "Titulo":"",
  "Descripcion":"",
  "Categoria":"",
  "FotoDir":"../../assets/imgs/1.jpg"
},
{
  "id":"2",
  "Titulo":"",
  "Descripcion":"",
  "Categoria":"",
  "FotoDir":"../../assets/imgs/2.jpg"
},
{
  "id":"3",
  "Titulo":"",
  "Descripcion":"",
  "Categoria":"",
  "FotoDir":"../../assets/imgs/3.jpg"
},{
  "id":"4",
  "Titulo":"",
  "Descripcion":"",
  "Categoria":"",
  "FotoDir":"../../assets/imgs/4.jpg"
},{
  "id":"5",
  "Titulo":"",
  "Descripcion":"",
  "Categoria":"",
  "FotoDir":"../../assets/imgs/5.jpg"
},{
  "id":"6",
  "Titulo":"",
  "Descripcion":"",
  "Categoria":"",
  "FotoDir":"../../assets/imgs/6.jpg"
}];

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})

export class NewComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    
  }

}
