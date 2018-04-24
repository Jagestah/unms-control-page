var curl = require('curlrequest');
var options = {
	url: 'https://35.193.18.18/v2.1/user/login',
	method: 'POST',
	headers: {"accept": "application/json","content-type": "application/json"},
	data: '{"password": "$umm1t20ie","username": "ubnt","sessionTimeout": 3600000}',
	include: true,
	insecure: true
}

curl.request(options, function(err, parts) {
	console.log(parts)
	console.log(err)
})