var curl = require('curlrequest');
var fs = require('fs');
var data = '{"password": "'+'$umm1t20ie'+'","username": "ubnt","sessionTimeout": 3600000}'
var options = {
	url: 'https://35.193.18.18/v2.1/user/login',
	method: 'POST',
	headers: {"accept": "application/json","content-type": "application/json"},
	data: '{"password": "$umm1t20ie","username": "ubnt","sessionTimeout": 3600000}',
	include: false,
	insecure: true
}
//Parses info and saves token
curl.request(options, function(err, parts) {
	var parts = JSON.stringify(parts)
	var parts = parts.split('\\r\\n', -1)
	var token = parts[6]
	var token = token.split(": ", -1)
	var token = token[1]
	fs.writeFile('/home/jj/Electron/unms-control-page/token', token, function(err) {
    	if(err) {
        	return console.log(err);
    	}
    	document.write("TOKEN: <br> " + token + " <br> The token was saved!<br>")
	});
})