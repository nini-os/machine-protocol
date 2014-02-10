
/**
 * decodeMessage - encode the message using the protocol
 *
 * @param {Number} [type] - Board type
 * @param {Number} [id] - Board id
 * @param {Number} [cmd] - Action command
 * @param {Array} [values] - Actuator's ids and values
 * @return messageEncoded - Object containing the decoded message
 */
module.exports.encodeMessage = function(type,id,cmd,values)
{
	
	var messageEncoded=new Buffer(4+(values.length*2));
	messageEncoded[0]=type;
	messageEncoded[1]=id;
	messageEncoded[2]=cmd;
	messageEncoded[3]=(values.length*2);
	var i=0;
	for (value in values)
	{
		messageEncoded[4+i]=values[value][0];
		i++;
		messageEncoded[4+i]=values[value][1];
		i++;
	}
	return messageEncoded;
};

/**
 * decodeMessage - decode the message using the protocol
 *
 * @param {String} [message] - message to decode
 * @return decodedMessage - Object containing the decoded message
 */
module.exports.decodeMessage = function(message)
{
	//only work for 
	var decodedMessage = new Object();
	decodedMessage.type=message.charCodeAt(0);
	decodedMessage.id=message.charCodeAt(1);
	decodedMessage.cmd=message.charCodeAt(2);
	var len=message.charCodeAt(3);
	decodedMessage.values=[];
	var i=0;
	var v=0;
	while(i!=len)
	{
		decodedMessage.values[v]=[];
		decodedMessage.values[v][0]=message.charCodeAt(i+4);
		i++;
		decodedMessage.values[v][1]=message.charCodeAt(i+4);
		i++;
		v++;
	}
	return decodedMessage;
};

