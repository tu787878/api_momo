var crypto = require('crypto');

class Handler{
    constructor(){}

    // eBByDR0lBCFsCZzddMFyAZWsnSJBBO1O
    toSignature(str){
        var hmac = crypto.createHmac('sha256', 'eBByDR0lBCFsCZzddMFyAZWsnSJBBO1O');
        var data2 = hmac.update(str);
        var signature = data2.digest('hex');
        return signature;
    }

    toTopic(str){
        var str2 = str.split("=");
        return str2[2];
    }
}
module.exports = Handler;