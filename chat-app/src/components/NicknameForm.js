import { useState, useCallback } from "react";

function NicknameForm({ handleSubmitNickname }) {
  const [nickname, setNickname] = useState("");

  const handleChangeNickname = useCallback(event => {
    setNickname(event.target.value);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (nickname.trim()) {
      handleSubmitNickname(nickname);
      setNickname("");
    }
  }, [handleSubmitNickname, nickname]);

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <div className="card d-flex flex-row align-items-center p-3">
        <label htmlFor="user-name-input" style={{ width: 60 }}>
          닉네임
        </label>
        <input
          type="text"
          className="form-control mx-2"
          style={{ width: 300 }}
          id="user-name-input"
          maxLength={12}
          value={nickname}
          onChange={handleChangeNickname}
          placeholder="닉네임을 입력하세요"
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!nickname.trim()}
        >
          확인
        </button>
      </div>
    </form>
  );
}

export default NicknameForm;