const SOCKET_EVENT = {
  JOIN_ROOM: "JOIN_ROOM",
  UPDATE_NICKNAME: "UPDATE_NICKNAME",
  SEND_MESSAGE: "SEND_MESSAGE",
  RECEIVE_MESSAGE: "RECEIVE_MESSAGE",
};

const roomName = "general"; // 기본 룸 이름 정의

module.exports = function (socketIo) {
  socketIo.on("connection", (socket) => {
    console.log("New client connected:", socket.id);
    
    Object.keys(SOCKET_EVENT).forEach(typeKey => {
      const type = SOCKET_EVENT[typeKey];

      socket.on(type, requestData => {
        const firstVisit = type === SOCKET_EVENT.JOIN_ROOM;

        if (firstVisit) {
          socket.join(roomName);
          console.log(`Socket ${socket.id} joined room: ${roomName}`);
        }

        const responseData = {
          ...requestData,
          type,
          time: new Date(),
          socketId: socket.id,
        };
        
        socketIo.to(roomName).emit(SOCKET_EVENT.RECEIVE_MESSAGE, responseData);
        console.log(`${type} is fired with data: ${JSON.stringify(responseData)}`);
      }); 
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });
}