import { Component, OnInit } from '@angular/core';
import { GetcareerService } from 'src/app/services/getcareer.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor(private getcareer: GetcareerService) { }

  hold: any;
  categoryId: any;
  categoryName: any;

  ngOnInit(): void {

    this.categoryId = localStorage.getItem('careercategoryid');
    this.categoryName = localStorage.getItem('categoryname');

    this.getcareer.getcareerpath(this.categoryId).subscribe(
      {
        next:(data: any) =>{
          console.log(data);
          this.hold = data;
        }
      }
    )
  }

  sendcareer(index: any){
    localStorage.setItem('careerpathid', this.hold[index].id);
    localStorage.setItem('careername', this.hold[index].name);
  }

}
