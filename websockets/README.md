**WebSocket** protocol offers persistent, real-time, full-duplex communication by enabling the sending off small chunks of data over a single persistent connection, in both directions.

The WebSocket protocol has only two agendas:

- To open up a handshake
- to help the data transfer.

There are a few common WebSocket server libraries that make managing WebSockets easier – notably **WS**, **SockJS** and **Socket.IO**.

**Events in socket.io**:

Sockets work based on events. There are some reserved events, which can be accessed using the socket object on the server side.

These are -

- Connect
- Message
- Disconnect
- Reconnect
- Ping
- Join
- Leave

The client-side socket object also provides us with some reserved events, which are −

- Connect
- Connect_error
- Connect_timeout
- Reconnect, etc.

**Broadcasting in socket.io**:

Broadcasting means sending a message to all connected clients.We can send the message to all the connected clients, to clients on a namespace and clients in a particular room.
To broadcast an event to all the clients, we can use the **io.emit()** method.

**Rooms in socket.io**:

Rooms in Socket.IO are arbitrary channels that sockets can join and leave.They are used to broadcast events to a subset of clients.Rooms are a server-only concept, meaning that the client does not have access to the list of rooms it has joined.Joining and leaving a room is done by calling the **join** method on the socket to subscribe it to a given channel/room.

**Tasks**:

**Task 1**: Create a simple web page that connects to a websocket server and sends a message to it when a button is clicked.

**Task 2**: Create a real-time chat application using Websocket in Node.js. Allow multiple clients to connect to the server and send messages to each other in real-time.
