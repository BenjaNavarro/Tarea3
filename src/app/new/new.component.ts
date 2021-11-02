import { Component, OnInit } from '@angular/core';
import { NewList } from '../news';
import { categoryList } from '../category';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})

export class NewComponent implements OnInit {

  NewList = NewList;
  catList = categoryList

  constructor() { }
  
  ngOnInit(): void {
    
  }

}
