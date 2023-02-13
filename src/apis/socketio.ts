import * as io from "socket.io-client";

export const socket = io.connect('http://localhost:8080', {
  path: '/socket.io',
  transports: ['websocket']
});