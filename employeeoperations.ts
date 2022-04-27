import { employee } from "./employee";

export class employeeoperations{
    employeelist:employee[];
    public addemployee():void{
        console.log("add");
        
    }
    public updateemployee():void{
        console.log("update");
        
    }
    public deleteemployee():void{
        console.log("delete");
        
    }
}
console.log("enter the choice");
console.log("1.add");
console.log("2.update");
console.log("3.delete");
const input=window.prompt("enter the input");
const po=new employeeoperations;
switch(input){
    case '1':
             po.addemployee();
             break;
    case '2':
        po.updateemployee();
        break;
    case '3':
        po.deleteemployee();
        break;
}
