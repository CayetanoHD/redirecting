// Obtiene el idioma del navegador
const browserLang = navigator.language;

// Comprueba el idioma del navegador y establece el texto adecuado
if (browserLang.startsWith('es')) {
  document.getElementById('title').textContent = 'Si no se redirige pronto, por favor <a href="">use este enlace</a>';
} else {
  document.getElementById('title').textContent = 'If you\'re not redirected soon, please <a href="">use this link</a>';
}

        
        // Función para detectar el tipo de dispositivo y redirigir a la tienda de aplicaciones correspondiente
		function redirect(){
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
