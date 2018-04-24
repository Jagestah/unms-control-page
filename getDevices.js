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

//console.log(options);

curl.request(options, function(err, parts) {
//	console.log(err)
//	console.log(parts)
	parts = JSON.stringify(parts)
//	console.log(parts)
	obj = JSON.parse(parts)
//	console.log(obj)
	console.log(obj.identification)
});
//var jsonarray = "";
//JSONArray jsonarray = new JSONArray(parts);
//for (int i = 0; i < jsonarray.length(); i++) {
//    JSONObject jsonobject = jsonarray.getJSONObject(i);
//    String name = jsonobject.getString("name");
//    String url = jsonobject.getString("type");
//}
//console.log(name)
//console.log(url)