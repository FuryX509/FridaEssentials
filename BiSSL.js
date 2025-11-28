setImmediate(function() { //prevent timeout
    Java.perform(function() {
		var bClass = Java.use("okhttp3.CertificatePinner");
		bClass.hashCode.overload().implementation = function() {
			
			return 1;
		}
		console.log("[*] SSL Bypass");
    })
})