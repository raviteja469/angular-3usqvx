import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  src:string = "";
  dest:string = "";
  constructor() { }
   
  ngOnInit(): void {
  }
  
  trips:any=[];
  pathString:string="";
  inUpperLevel:boolean=false;
  addTrip(){
    this.trips.push(this.src.toUpperCase()+"-"+this.dest.toUpperCase());
    this.src="";
    this.dest="";
    this.pathString="";
    this.inUpperLevel=false;
    this.buildPathString();
  }
buildPathString(){
 for(let i=0;i<this.trips.length-1; i++)
 {
    if(this.trips[i]==this.trips[i+1]){
      this.addCurveToPath();
    }else if(this.trips[i].split("-")[1] == this.trips[i+1].split("-")[0]){
      if(this.inUpperLevel){
        this.pathString+="downCurve-";
        this.inUpperLevel = false;
      }else{
        this.pathString+="straightLine-";
      }
    } else if(this.trips[i].split("-")[1] == this.trips[i+1].split("-")[1]){
      if(this.inUpperLevel){
        this.pathString+="downCurveArrow-"
        this.inUpperLevel = false;
      }else{
        this.pathString+="straightLineArrow-";
      }
    }
   
    
     

 }

} 
addCurveToPath(){
  var temp:any = this.pathString.split("-");
  temp = temp.splice(0,temp.length-2).join("-");
  this.pathString = temp + "-" + "upCurve-" + "straightLine-";
  this.inUpperLevel = true;

} 
}
