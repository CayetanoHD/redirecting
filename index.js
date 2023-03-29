
		// Función para detectar el tipo de dispositivo y redirigir a la tienda de aplicaciones correspondiente
		function redirigir(){
			var userAgent = navigator.userAgent || navigator.vendor || window.opera;
			// Si el usuario está usando un dispositivo Android
			if (/android/i.test(userAgent)) {
				window.location.href = "https://play.google.com/store/apps/details?id=com.davinote.partners";
			}
			// Si el usuario está usando un dispositivo iOS
			else if (/iPad|iPhone|iPod/.test(userAgent)) {
				window.location.href = "https://apps.apple.com/app/davinote-partners/id1520464616?l=en#?platform=iphone";
			}
			// Si no se reconoce el dispositivo, mostrar un mensaje de error
			else {
				alert("La redirecion automatica ha fallado.");
			}
		}
