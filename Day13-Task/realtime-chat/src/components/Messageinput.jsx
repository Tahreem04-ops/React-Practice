function MessageInput({
  username,
  setUsername,
  message,
  setMessage,
  sendMessage,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="input-section">

      <input
        type="text"
        placeholder="👤 Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <textarea
        placeholder="💬 Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={sendMessage}>
        🚀 Send
      </button>

    </div>
  );
}

export default MessageInput;