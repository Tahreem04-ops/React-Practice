import MessageItem from "./MessageItem";

function MessageList({ messages }) {

  if (messages.length === 0) {
    return (
      <div className="message-list">

        <div className="empty-chat">

          <div className="empty-icon">
            💬
          </div>

          <h2>No Messages Yet</h2>

          <p>Start the conversation!</p>

        </div>

      </div>
    );
  }

  return (
    <div className="message-list">

      {messages.map((msg) => (
        <MessageItem
          key={msg.id}
          message={msg}
        />
      ))}

    </div>
  );
}

export default MessageList;