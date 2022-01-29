import { Component } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent {

  src:any="";
  dest:any="";
  trips:any=[];
  pathString:string="";
  inUpperLevel:boolean=false;
  addTrip(){
    this.trips.push(this.src.toUpperCase()+"-"+this.dest.toUpperCase());
    this.src="";
    this.dest="";
    this.pathString="";
    
  }
  fillColor = 'rgb(255, 0, 0)';
  circle: { cx: number, cy:number, r:number , stroke:string}[]=[];
  line:{x1:number,y1:number,x2:number,y2:number , stroke:string}[] = [];
  textAdjust: {tx:number,ty:number,text:string}[]=[];
  levels:number[]=[1,1,2,2,2,1];
  startPoint:string="MLR";
  endPoint:string="";
  nodes:string[] = ["circle","curved up","curved down","line"];
  textstring:string[] = ["BLR-MAD","MAD-HYD","BLR-HYD","HYB-DEL","HYB-DEL","DEL-BLR"];
  nums:number[] = [0,0,300,300];
  pathString1:string="M25,50 C40,50 50,30 60,30";
  pathString2:string="M160,30 C170,30 180,50 190,50";
  urlArrownone:string="url(#arrownone)";
  urlArrowhead:string="url(#arrowhead)";
  curveUp:string[]=[];
  curveDown:string[]=[];
  curveUpArrow:string[]=[];
  curveDownArrow:string[]=[];
  X1:number=20;
  Y1:number=250;
  ini:string="level2";
  arr:string[]=["circle","line","circle","line arrow","circle","curved down","circle","curved up arrow","circle","line"];
  length:number=40;
  CX1:number=20;
  CX2:number=30;
  CY1:number=50;
  CY2:number=30;
  CXend:number=this.X1+60;
  CYend:number=this.Y1+30;
  dist:number=4;
  str:string="#0000ff";
  linesArrow=[
    { x1: 86.69, y1: 10, x2: 86.69, y2: 10 , stroke:this.str}
  ];
  lines = [ // here
    {  x1: 86.69, y1: 10, x2: 86.69, y2: 10 , stroke:this.str}
    
  ];
  circles = [
     { cx:10,cy:20,r:0,stroke:this.str}
  ];
  ngOnInit() {
    this.func(this.arr);
    
  }
  arrayStarting:string[]=[];  // define array
  arrayDestination:string[]=[];
  getStart(val:string){
  this.arrayStarting.push(val);
  }
  getDestination(val:string){
    this.arrayDestination.push(val);
    }
  func(arr:string[])
  {
    
    let j=0;
     for(let i=0;i<this.arr.length;i++)
     {
      if(this.arr[i]=="circle")
      {
        this.X1=this.X1+this.dist;
          this.circles.push({cx:this.X1,cy:this.Y1,r:5,stroke:this.str});
          this.textAdjust.push({tx:this.X1-10,ty:this.Y1+15,text:this.textstring[j]})
          this.X1=this.X1+5;
          j++;
      }
       else if(this.arr[i]=="line" || this.arr[i]=="line arrow")
       {
         
          
         if(this.arr[i]=="line arrow")
         {
          this.X1=this.X1+this.dist;
          this.linesArrow.push({x1:this.X1,y1:this.Y1,x2:this.X1+this.length,y2:this.Y1,stroke:this.str});
          this.X1 = this.X1 + this.length + 7;
         
          
         }
         else
         {
          this.X1=this.X1+this.dist;
          this.lines.push({x1:this.X1,y1:this.Y1,x2:this.X1+this.length,y2:this.Y1,stroke:this.str});
          this.X1 = this.X1 + this.length + 4;
           
         } 
       }
       else if(this.arr[i]=="curved up" || this.arr[i]=="curved up arrow")
       {
        this.X1=this.X1+this.dist;
         let st = "M";
         this.CXend = this.X1+35;
         this.CYend = this.Y1-20;
         this.CX1 = this.X1+15;
         this.CX2 = this.X1+25;
         this.CY2 = this.Y1-20;
         st = st + this.X1+","+this.Y1+" "+"C"+this.CX1+","+this.Y1+" "+this.CX2+","+this.CY2+" "+this.CXend+","+this.CYend;
        if(this.arr[i]=="curved up arrow")
        {
          this.X1 = this.X1 + this.length + 7;
          this.Y1 = this.Y1 - 20;
         this.curveUpArrow.push(st); 
        } 
        else
        {
          this.X1 = this.X1 + this.length + 4;
          this.Y1 = this.Y1 - 20;
         this.curveUp.push(st); 
        }
         
       }
       else if(this.arr[i]=="curved down" || this.arr[i]=="curved down arrow")
       {
        this.X1=this.X1+this.dist;
         let st = "M";
         this.CXend = this.X1+35;
         this.CYend = this.Y1+20;
         this.CX1 = this.X1+15;
         this.CX2 = this.X1+25;
         this.CY2 = this.Y1+20;
         st = st + this.X1+","+this.Y1+" "+"C"+this.CX1+","+this.Y1+" "+this.CX2+","+this.CY2+" "+this.CXend+","+this.CYend;
        if(this.arr[i]=="curved down arrow")
        {
          this.X1 = this.X1 + this.length + 7;
          this.Y1 = this.Y1 + 20;
         this.curveDownArrow.push(st); 
        } 
        else
        {
          this.X1 = this.X1 + this.length + 4;
          this.Y1 = this.Y1 + 20;
         this.curveDown.push(st); 
        }
         
       }

     }
  }
}
