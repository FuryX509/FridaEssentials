setImmediate(function() {
    Java.perform(function() {
		var aClass = Java.use("com.challenge_android.fragments.ChallengeFragment");
		aClass.b.overload().implementation = function() {
			return true;
		}
		aClass.iia.overload('[I', 'java.lang.String').implementation = function(aa,ddd) {
			var arr = [147, 146, 71, 53, 172, 150, 128, 117, 124, 141, 164, 118, 173, 163, 172, 139, 159, 173, 166, 114, 125, 137, 60, 112, 135, 136, 152, 112, 172, 153, 136, 127, 151, 172, 175, 79, 134, 136, 75, 116, 135, 115, 135, 130, 125, 55, 147, 116, 157, 55, 168, 126, 134, 76, 158, 52, 124, 163, 125, 75, 173, 164, 67, 57];
			var ret = this.iia(arr,"46")
			console.log("arg1:" + aa + "\r\n");
			console.log("arg2:" + ddd + "\r\n");
			console.log("ret:" + ret + "\r\n");
		}
		
		/*aClass.a.overload().implementation = function() {
			tmp = this.aa1;
			console.log("arg1:" + this.aa1 + "\r\n");
			var temp = this.a()
			
			console.log("ret: " + temp + "\r\n");
		}*/
		
		var bClass = Java.use("com.challenge_android.a.c");
		bClass.a.overload().implementation = function(a) {
			return true;
		}
		
		bClass.b.overload().implementation = function(a) {
			return true;
		}
		
		bClass.c.overload().implementation = function(a) {
			return true;
		}
    })
})