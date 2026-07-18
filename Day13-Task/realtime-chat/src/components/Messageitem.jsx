function MessageItem({ message }) {

  const avatar =
    message.username?.charAt(0).toUpperCase() || "?";

  const time = new Date(
    message.created_at
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (

    <div className="message-card">

      <div className="avatar">

        {avatar}

      </div>

      <div className="message-content">

        <div className="message-header">

          <h4>

            {message.username}

          </h4>

          <span>

            {time}

          </span>

        </div>

        <p>

          {message.message}

        </p>

      </div>

    </div>

  );
}

export default MessageItem;