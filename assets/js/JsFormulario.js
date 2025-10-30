window.addEventListener("DOMContentLoaded", function(){
	
	const lv_txtName= document.getElementById("txtName");
	txtName.addEventListener("click", function(){
		let Lv_Mensaje_1= "Probando 1er evento...";
		alert(Lv_Mensaje_1);
	});
	const lv_txtEmail= document.getElementById("txtEmail");
	txtEmail.addEventListener("click", function(){
		let Lv_Mensaje_2= "Probando 2do evento...";
		alert(Lv_Mensaje_2);
	});
	
	const lv_txtSlt= document.getElementById("txtSlt");
	txtSlt.addEventListener("click", function() {
		document.body.style.backgroundColor = randomColor();
	});
});

