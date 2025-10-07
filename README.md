# 실시간 채팅 애플리케이션

React와 Node.js, Socket.IO를 사용하여 구축된 실시간 채팅 애플리케이션입니다.

## 🌟 주요 기능

- **실시간 메시징**: Socket.IO를 통한 실시간 메시지 송수신
- **닉네임 관리**: 사용자 닉네임 설정 및 변경
- **룸 시스템**: 사용자가 채팅방에 입장/퇴장할 때 시스템 메시지 표시
- **연결 상태 표시**: 서버 연결 상태를 실시간으로 표시
- **반응형 UI**: Bootstrap을 활용한 반응형 사용자 인터페이스

## 🛠️ 기술 스택

### Backend (`/chat`)
- **Node.js** - 서버 런타임
- **Express** - 웹 프레임워크
- **Socket.IO** - 실시간 양방향 통신
- **CORS** - Cross-Origin Resource Sharing 지원
- **Nodemon** - 개발 시 자동 재시작

### Frontend (`/chat-app`)
- **React 19.1.1** - 사용자 인터페이스 라이브러리
- **Socket.io-client** - 클라이언트 사이드 Socket.IO
- **Bootstrap 5** - UI 컴포넌트 및 스타일링
- **Create React App** - React 애플리케이션 보일러플레이트

## 📂 프로젝트 구조

```
project/
├── chat/                           # 백엔드 서버
│   ├── src/
│   │   └── socket/
│   │       └── index.js           # Socket.IO 이벤트 핸들러
│   ├── server.js                  # Express 서버 설정
│   ├── package.json
│   └── .env.development           # 개발 환경 변수
├── chat-app/                      # 프론트엔드 React 앱
│   ├── public/                    # 정적 파일
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatRoom.js        # 채팅방 컴포넌트
│   │   │   ├── MessageForm.js     # 메시지 입력 폼
│   │   │   └── NicknameForm.js    # 닉네임 설정 폼
│   │   ├── service/
│   │   │   └── socket.js          # Socket.IO 클라이언트 설정
│   │   ├── App.js                 # 메인 애플리케이션 컴포넌트
│   │   └── index.js               # 애플리케이션 진입점
│   └── package.json
├── package.json                   # 루트 패키지 설정
├── .env                          # 환경 변수
└── .gitignore                    # Git 무시 파일
```

## 🚀 시작하기

### 전제 조건

- [Node.js](https://nodejs.org/) (v14 이상)
- npm 또는 yarn

### 설치 및 실행

1. **프로젝트 클론 및 의존성 설치**

```bash
git clone <repository-url>
cd project
```

2. **백엔드 서버 실행**

```bash
cd chat
npm install
npm start
```

서버가 `http://localhost:4000`에서 실행됩니다.

3. **프론트엔드 애플리케이션 실행**

새 터미널을 열고:

```bash
cd chat-app
npm install
npm start
```

애플리케이션이 `http://localhost:3000`에서 실행됩니다.

## 📡 Socket.IO 이벤트

### 클라이언트 → 서버

- `JOIN_ROOM`: 사용자가 채팅방에 입장
- `UPDATE_NICKNAME`: 닉네임 변경
- `SEND_MESSAGE`: 메시지 전송

### 서버 → 클라이언트

- `RECEIVE_MESSAGE`: 모든 이벤트에 대한 브로드캐스트

## 🎯 주요 컴포넌트

### Frontend

- **App.js**: 애플리케이션의 메인 컴포넌트, Socket 연결 관리
- **NicknameForm.js**: 사용자 닉네임 입력 및 설정
- **ChatRoom.js**: 채팅 메시지 표시 및 스크롤 관리
- **MessageForm.js**: 메시지 입력 및 전송

### Backend

- **server.js**: Express 서버와 Socket.IO 서버 설정
- **socket/index.js**: Socket.IO 이벤트 핸들링 로직

## 🔧 환경 설정

### Backend 환경 변수 (`.env.development`)
```
FRONT_URL=http://localhost:3000
BACK_URL=http://localhost:4000
PORT=4000
```

### Frontend 환경 변수 (`.env`)
```
REACT_APP_BACK_URL=http://localhost:4000
```

## 📝 사용법

1. 브라우저에서 `http://localhost:3000` 접속
2. 닉네임 입력 후 확인 버튼 클릭
3. 채팅방에서 메시지 입력 및 전송
4. 다른 브라우저 탭에서 동일한 URL로 접속하여 실시간 채팅 테스트
