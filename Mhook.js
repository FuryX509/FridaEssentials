function bin2String(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}
setImmediate(function() { //prevent timeout 
    Java.perform(function() {
		//Create Object of a Class 
		var aClass = Java.use("*Packages.class*");
		//hooking Java methods
		aClass./*method_name*/.overload().implementation = function(/*args*/) {
			//Access arguments and manipulate
			return this./*method_name*/(/*args*/);
		}
		console.log("[*] Simple method Hooking with bin2String, can convert binary params to String.");
    })
})