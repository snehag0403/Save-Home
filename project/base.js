/////////////////////////////////////Java Script Coading//////////////////////////////////

/////////////////fucntion for fetching all the requests from local storage //////////////////////

	function dispdata(){
				var row=1;
				var display = document.getElementById("display");	 				

			for (var i = 0; i < localStorage.length; i++) {
 				 key = localStorage.key(i);
 				 data = JSON.parse(localStorage.getItem(key));				 
 				 			 		
 				 		var newRow = display.insertRow(row);
  						var cell0 = newRow.insertCell(0);
  						var cell1 = newRow.insertCell(1);
  						var cell2 = newRow.insertCell(2);
  						var cell3 = newRow.insertCell(3);
  						var cell4 = newRow.insertCell(4);
  						var cell5 = newRow.insertCell(5);
  						var cell6 = newRow.insertCell(6);
  						var cell7 = newRow.insertCell(7);
  						var cell8 = newRow.insertCell(8);

  						cell0.innerHTML += data[0]
  						cell1.innerHTML += data[1];
  						cell2.innerHTML += data[2];
  						cell3.innerHTML += data[3];
  						cell4.innerHTML += data[4];
  						cell5.innerHTML += data[5];	
  						cell6.innerHTML += data[6];	
  						cell7.innerHTML += data[7];
						cell8.innerHTML += data[8];						  		
  					
  					row++;
    			}	
  		}

////////////////////////////function for removing data item//////////////////////////  		
  		
  		function removedata(){
  			var data = document.getElementById("uidr").value; 
			  localStorage.removeItem(data);
			  var audio = "Request has been Removed.";
			  read(audio);
  			alert(audio);
  		}

///////////////////////////function for checking if uid is avaliable///////////////////

	function isavail(){
			var flag=0;
			var uidr = document.getElementById("uidr").value;
			var uidf = document.getElementById("uidf").value;
 			for (var i = 0; i < localStorage.length; i++) {
	 				 key = localStorage.key(i);
	 				 if(key==uidr){
	 				  	flag=1;}
	 				 
	 				 else if(key==uidf){
	 				 	flag=2;}
	 				}
	 		if (flag==1){			
	 			removedata();}
	 			
	 		else if(flag==2){
	 			status();
	 		}

	 		else{
				 read("Wrong Request Number Please Check again..");
	 			alert("Wrong! Request Number.\nPlease Check again.."); 		
	 		}

	 	}


////////////////////////fuction for changeing the status///////////////////////////////////

		function status(){
			var uid = document.getElementById("uidf").value;
			var obj = JSON.parse(localStorage.getItem(uid));
			localStorage.removeItem(uid);
			obj[7]="Successful";
			localStorage.setItem(uid, JSON.stringify(obj));
			var audio = "Status successfully changed.";
			read(audio)
			alert(audio);
			
		}

///////////////////////function for counting pending requests////////////////////////////////
		
		function pendingstatus(){
			var counter=0;
			for (var i = 0; i < localStorage.length; i++) {
				 key = localStorage.key(i);
				 data = JSON.parse(localStorage.getItem(key));
				 //for(var j=0;j<data.length;j++)
				 if(data[7]=="In Progress..")
				 {
					 counter++;
				 } 
			}
			if(counter>0)
			{return counter;}			
		}


		function read(audio){
			var msg = new SpeechSynthesisUtterance();
			msg.text = audio;
			window.speechSynthesis.speak(msg); 
			//speechSynthesisInstance.pause();   
		 }

		 





