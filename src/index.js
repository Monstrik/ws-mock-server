const WebSocket = require('ws')
const term = require('terminal-kit').terminal

function WSS (db, port) {
  this.run = function () {
    // start server
    const wss = new WebSocket.Server({ port: port })
    console.log(`\nListening on localhost:${port}`)
    console.log(`Press ctrl-c to exit`)

    // get data from response db
    function getResponseFromDB (requestData) {
      // clear cache, require should always run again to detect file changes
      delete require.cache[require.resolve(db)]
      const resDB = require(db)
      return resDB[requestData.type] ? resDB[requestData.type] : { result: 'err', error: 'Unknown message type' }
    }

    // send data through socket
    let sendResponse = function (ws, requestData) {
      const response = getResponseFromDB(requestData)
      console.log('\n\nSending:\n')
      term.green(JSON.stringify(response, 4, 2))
      ws.send(JSON.stringify(response))
    }

    wss.on('connection', function connection (ws, req) {
      term.brightGreen('\nNew connection: ', req.url)

      ws.on('message', function incoming (message) {
        const requestData = JSON.parse(message)
        console.log('\n\nreceived:\n')
        term.yellow(JSON.stringify(requestData, 4, 2))
        sendResponse(ws, requestData)
      })
    })
  }
}

module.exports = WSS
