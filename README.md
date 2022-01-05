# ws-mock-server

> Mock websocket endpoints with ease

ws-mock-server was developed in order to allow a developer to easily mock websocket apis in a few seconds.


# Install

    $ npm install ws-mock-server --save-dev

# Getting started

ws-mock-server lets you send through a socket connection data defined in a json file.

A js file can be used instead of a json in order to perform operations or send random stuff, such js should export an object.

Data are sent when the connection occurs. Then the application continues listening for stdin inputs, so that it is possible to:

Incoming in/out will be printed to the console.

## Start the cli

    $ ws-mock-server -i mydb.json

Available options:

    $ ws-mock-server -h

    usage: index.js [-h] [-v] [-p PORT] -i DB

    ws-mock-server cli

    Optional arguments:
      -h, --help            Show this help message and exit.
      -v, --version         Show program's version number and exit.
      -p PORT, --port PORT  Websocket server port
      -i DB, --input DB     JSON or js input file which exports (es5) an object

# Example

Given the following `db.json`:

   {
     "challenge": {
       "result": "OK",
       "type": "challenge",
       "key": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvBXTe278Lwg2MoI7iGKolSYuF+sNFKrsZplxCN9x0kItU3KIf8+1q60ILLwLewCEf7foxzpWp32j9YYU9vNBghuJ7BHcDYTffTRcv+QdNno491j701Hq7DIw13AGCQQTRcnfclvblnytIEWoQsiUvPJcdiWgqJIX3IQGA47a+uwIDAQAB"
     },
     "login": {
       "result": "OK",
       "type": "login"
     },
     "login-error": {
       "result": "invalid user/password",
       "type": "login"
     },
     "verifylogin": {
       "result": "OK",
       "type": "verifylogin",
       "active": "Y",
       "userid": "julian@google.com",
       "verify_level": 0
     },
     "verifylogin-error": {
       "result": "OK",
       "result": "invalid user/password",
       "userid": "julian@google.com"
     }
   }


This project it's quite simple actually,
I've developed it to match my needs during some UI implementations.
