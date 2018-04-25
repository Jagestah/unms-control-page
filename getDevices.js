var curl = require('curlrequest');
var fs = require('fs');
var token = fs.readFileSync('/home/jj/Electron/unms-control-page/token', 'utf8');
var options = {
	url: 'https://35.193.18.18/v2.1/devices',
	method: 'GET',
	headers: {"accept": "application/json","content-type": "application/json","x-auth-token": token},
	include: false,
	insecure: true
}

curl.request(options, function(err, devices) {
	devices = devices.split("bytes", 2)
	devices = devices[1]
	devices = devices.split("\n")
	devices = devices[2]
//	console.log(devices)
	devices = JSON.parse(devices)
//	console.log(devices)
	document.write("Here are the available devices: <br>")	
	for (var i = 0; i < devices.length; i++) {
		//gathers device info
		var deviceName = devices[i].identification.name;
		var deviceId = devices[i].identification.id;
		var deviceType = devices[i].identification.type;
		var deviceSite = devices[i].identification.site.id;
//		document.write(deviceName+deviceId+deviceType+deviceSite)
		//creates button
		var btn = deviceName.toLowerCase()
		var btn = document.createElement("Button");
		var t = document.createTextNode(deviceName);
		var disableClick = function(){
			var disableOptions = {
				url: 'https://35.193.18.18/v2.1/devices/onus' + deviceId + 'block',
				method: 'POST',
				headers: {"accept": "application/json","content-type": "application/json","x-auth-token": token},
				insecure: true
			}
			document.write(disableOptions)
			curl.request(disableOptions, function(err, result){
				document.write(result)
			})
			var para = document.createElement("P");
			var text = document.createTextNode("Device ID "+deviceId+" disabled.");
			para.appendChild(text)
			document.body.appendChild(para);
			

		}
		btn.appendChild(t);
		btn.addEventListener('click',disableClick, false);
		document.body.appendChild(btn);
//		document.getElementById("btn").addEventListener("click", document.write("click"));
//		document.write('<button onlick="getElementById('btn') = document.write("clicky")"')
//		document.getElementById("btn").addEventListener("click", function(){
//		   document.write("Clicky");
//		});

		document.write("Name: " + deviceName + " || " + "ID: " + deviceId + " || " + "Type: " + deviceType + " <br> ");
//		console.log(devArray)
//   	console.log(devices[i].identification.id);
//	  	console.log(devices[i].identification.type)
//    	console.log(devices[i].identification.site.id)
    	}
	}
);