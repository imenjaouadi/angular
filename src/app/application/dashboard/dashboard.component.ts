import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../entities/facture.entity';
import { Route, Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
   //response:any = [];
   facture : Facture
  constructor(private crud: CrudService,private route:Router) { }

  ngOnInit() {
    //Swal.fire("Hello world!")
    this.getAll();
   
  }
  getAll(){
    this.crud.getAll().subscribe(res=>{
      this.facture=<Facture>res;
     })
  }
  delete(h){
    this.crud.deleteById(h._id).subscribe(res=>{
      alert("data deleted")
    })
//alert(h.client);
  }
  edit(z){
   this.route.navigate(['gestion',z._id])
  }

}
