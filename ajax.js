var Ajax = new function httpReq(){

   this.Req = new XMLHttpRequest();
   this.Resp;

   this.serial;  
   this.serverScript;

   this.postData = function(){
      this.Req.open("POST", this.serverScript, true);
      this.Req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      this.Req.send(this.serial);
   };

   this.getData = function(){
      this.Req.open("GET", this.serverScript + "?" + this.serial, true);
      this.Req.send();
   };

};

// write and assign response handler separately
// for example:
Ajax.Req.addEventListener("readystatechange", Response, false);
function Response(){
   if(this.readyState == 4 && this.status == 200){
	     Ajax.Resp = JSON.parse(this.responseText);
           
       }
   }
}
