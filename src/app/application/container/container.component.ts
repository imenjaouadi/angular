import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
    test :string ="hello";
    compteur:number=0;
    nom :string;
    email:string;
    phone:string;
    about:string;
    user : any =[];
    
    HEROES = [
      {id: "1", name:'Superman'},
      {id: "2", name:'Batman'},
      {id: "5", name:'BatGirl'},
      {id: "3", name:'Robin'},
      {id: "4", name:'Flash'}
   ];
    img="http://sf.co.ua/13/07/wallpaper-2935732.jpg";
   
   
  constructor() {
    console.log('constructor()')
   }

  ngOnInit() {
    console.log('ngOnInit')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  callfnct(){
    alert(this.test);
  }
  callfnctplus(){
    this.compteur++
  }
  callfnctmoins(){
    this.compteur--
  }
  callfnctdelete(){
    window.close;
  }
  save(){
    let data = {
      "nom":this.nom,
      "email":this.email,
      "phone":this.phone,
      "about":this.about
    }
    console.log(data);
  }
  verify(){
 //   this.email.match(".+@.+\\.[a-z]+");
   
  }
  
  callfnctvalid(){
    let data = {
      "nom":this.nom,
      "email":this.email,
      "phone":this.phone,
      "about":this.about
    }
    alert(this.nom+""+this.email+""+this.phone+""+this.about);
  }
  validateuser(){
    let data ={
      "nom":this.nom,
      "email":this.email,
      "phone":this.phone
    }
    this.user.push(data);
    console.log(data);
    
  }

}
