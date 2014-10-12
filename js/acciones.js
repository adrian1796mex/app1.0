//JavaScript
	
$(document).ready(function(e){//esperar que el documento este en ready	
	document.addEventListener("deviceready",function(){
		//espera que el dispositivo este listo para empezar
		//para los dispositivos existe el evento de tap que se encuentra en la libreria jquery.mobile
		$('#beep').tap(function(){
			navigator.notification.beep(1);
		});//tap beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(1000);
		});//tap vibrar    
	},false); //deviceready
});//ready