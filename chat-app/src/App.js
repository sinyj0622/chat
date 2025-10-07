import { socket, SocketContext, SOCKET_EVENT } from "./service/socket";
import { useState, useRef, useCallback, useEffect } from "react";

import NicknameForm from "./components/NicknameForm";
import ChatRoom from "./components/ChatRoom";

function App() {
  const prevNickname = useRef(null); // prevNickname 변경은 컴포넌트를 리렌더링 하지않습니다.
  const [nickname, setNickname] = useState("김첨지");
  const [isConnected, setIsConnected] = useState(false);
  
  useEffect(() => {
    // 소켓 연결 상태 모니터링
    socket.on('connect', () => {
      setIsConnected(true);
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from server');
    });

    // 메시지 수신 테스트
    socket.on(SOCKET_EVENT.RECEIVE_MESSAGE, (data) => {
      console.log('Received message:', data);
    });

    return () => { // App 컴포넌트 unmount시 실행
      //socket.off('connect');
      //socket.off('disconnect');
      //socket.off(SOCKET_EVENT.RECEIVE_MESSAGE);
      //socket.disconnect();
    }
  }, []);

  const handleSubmitNickname = useCallback(newNickname => {
    prevNickname.current = nickname;
    setNickname(newNickname);
    
    // 소켓으로 닉네임 변경 이벤트 전송 (테스트)
    socket.emit(SOCKET_EVENT.JOIN_ROOM, { 
      nickname: newNickname,
      message: `${newNickname}님이 입장했습니다.`
    });
  }, [nickname]);

  return (
    <SocketContext.Provider value={socket}>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="mb-3">
          <span className={`badge ${isConnected ? 'bg-success' : 'bg-danger'}`}>
            {isConnected ? '서버 연결됨' : '서버 연결 안됨'}
          </span>
        </div>
        <NicknameForm handleSubmitNickname={handleSubmitNickname} />
        {nickname && (
          <div className="mt-3">
            현재 닉네임: <strong>{nickname}</strong>
          </div>
        )}
        {nickname && <ChatRoom nickname={nickname} />}
      </div>
    </SocketContext.Provider>
  );
}

export default App;