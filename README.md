## Introduction

This is a simple library for using a simple protocol to communicate with a custom board.

Every message has this format:

TYPE (1bit)

ID (1bit)

CMD (1bit)

LEN (1bit)

DIN/OUT [1] (1bit)

DIN/OUT 1 (1bit)

DIN/OUT [2] (1bit)

DIN/OUT 2 (1bit)

...

DIN/OUT [n] (1bit)

DIN/OUT n (1bit)


TYPE is the type of board (input digital board etc...)

ID is the identify of the board.

CMD is the command issued to the board.

LEN is the length of the reamining next bit. 

DIN/OUT [1,2..,n] is the reference of the pin.

DIN/OUT 1,2,..,n is the value of the sensor/actuator on pin 1,2..n. 


## Function

var messageEncoded=encodeMessage(type,id,cmd,values); 

this function encode the message in a binary format using the parameters. 


var messageDecoded=decodeMessage(message);

this function decode the message and returning ad Object.

Output example: { type: 1, id: 1, cmd: 2, values: [ [ 2, 1 ] ] } 


## License

WTFPL
