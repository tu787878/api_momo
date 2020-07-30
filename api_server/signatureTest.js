var Handler = require("./handler");
var handler = new Handler();

var str = "partnerCode=MOMOKUIH20200709&partnerRefId=9607111e-ad3e-4b63-95ca-f40018a5fd37&requestType=capture\
&requestId=1512529262248&momoTransId=2321519788";

console.log(str)

var signature = handler.toSignature(str);

console.log(signature);