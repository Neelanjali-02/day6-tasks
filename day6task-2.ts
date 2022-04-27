class song{
     title:string;
     name:string;
     album_name:string;
     constructor(title:string,name:string,album_name:string){
         this.title=title;
         this.name=name;
         this.album_name=album_name;
         console.log("title is"+title);
         console.log("name is"+name);
         console.log("album name is"+album_name);
    
         var songs:Array<string>=["xxx","yyy","zzz","nnn","kkk"];
         console.log("the array of songs are"+songs);
         
     }
    }
    var obj=new song("bahubali","revanth","bahubali-2");
 