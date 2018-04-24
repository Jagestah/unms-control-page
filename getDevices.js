var curl = require('curlrequest');
var fs = require('fs');
var token = "";
var data = "";
fs.readFile('/home/jj/Electron/unms-control-page/token.txt', 'utf8', data);
	return data;
console.log(data);



var options = {
	url: 'https://35.193.18.18/v2.1/devices',
	method: 'GET',
	headers: {"accept": "application/json","content-type": "application/json","x-auth-token": token},
	include: true,
	insecure: true
}

console.log(options);

curl.request(options, function(err, parts) {
	console.log(err)
	console.log(parts)
})