import { Component, OnInit,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  src:string = "";
  dest:string = "";
  @Output() event = new EventEmitter<{trips:string[],pathString:string}>();
  
  constructor() { }
  sendString(){
    this.buildPathString1();
    this.event.emit({trips:this.trips,pathString:this.pathMainString});
    
  }
  ngOnInit(): void {
    
  }
  
  trips:any=[];
  pathString:string="";
  pathMainString:string="";
  inUpperLevel:boolean=false;
  levels:number[]=[];
  
  addTrip(){
    this.trips.push(this.src.toUpperCase()+"-"+this.dest.toUpperCase());
    this.src="";
    this.dest="";
    this.pathString="";
    this.inUpperLevel=false;
   
  }
  
buildPathString1(){
  
  if(this.trips.length>1)
  {
    for(let i=0;i<this.trips.length-1;i++)
    {
        if(this.trips[i].split("-")[0] == this.trips[i+1].split("-")[0] && this.trips[i].split("-")[1] == this.trips[i+1].split("-")[1])
        {
          if(i==0)
          {
             this.levels.push(2);
             this.levels.push(2);
              
          }else
          {
            this.levels.splice(this.levels.length-1, 1);
            this.levels.push(2);
            this.levels.push(2);
          }
        }
        else{

          if(this.levels[i]==2)
          {
            this.levels.push(1);
            
          }
          else{
            this.levels.splice(this.levels.length-1, 1);
            this.levels.push(1);
            this.levels.push(1);
          }
        }
    }
  }
    this.buildMainString();
}
buildMainString(){
  if(this.trips.length>1)
  {
    for(let i=0;i<this.trips.length-1;i++){
      if(this.trips[i].split("-")[0] == this.trips[i+1].split("-")[0] && this.trips[i].split("-")[1] == this.trips[i+1].split("-")[1]){
          this.pathMainString+="straightLine-";
      }else if(this.trips[i].split("-")[1] == this.trips[i+1].split("-")[0]){
        if(this.levels[i]==2 && this.levels[i+1]==1){
          this.pathMainString+="downCurve-";
          
        }else if(this.levels[i]==1 && this.levels[i+1]==1){
          this.pathMainString+="straightLine-";
        }else if(this.levels[i]==1 && this.levels[i+1]==2)
        {
          this.pathMainString+="upCurve-";
        }
      }else if(this.trips[i].split("-")[1] != this.trips[i+1].split("-")[0]){
        if(this.levels[i]==2 && this.levels[i+1]==1){
          this.pathMainString+="downCurveArrow-";
          
        }else if(this.levels[i]==1 && this.levels[i+1]==1){
          this.pathMainString+="straightLineArrow-";
        }else if(this.levels[i]==1 && this.levels[i+1]==2)
        {
          this.pathMainString+="upCurveArrow-";
        }
      } 
      
     }

  }
  

}  
/**buildPathString(){
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

} **/
}
