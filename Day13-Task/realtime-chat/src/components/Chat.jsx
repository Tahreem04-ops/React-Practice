import { useEffect, useRef, useState } from "react";
import { supabase } from "../supabase";

import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

import "../styles/Chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const bottomRef = useRef(null);

  // Fetch old messages
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });

    if (!error) {
      setMessages(data);
    }
  };

  // Send Message
  const sendMessage = async () => {
    if (username.trim() === "" || message.trim() === "") {
      alert("Please enter your name and message.");
      return;
    }

    const { error } = await supabase.from("messages").insert([
      {
        username: username,
        message: message,
      },
    ]);

    if (error) {
      console.log(error.message);
    } else {
      setMessage("");
    }
  };

  // Realtime
  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel("chat-room")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);

          setTimeout(() => {
            bottomRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }, 100);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="chat-container">

      {/* Header */}

      <div className="chat-header">

        <div className="logo">

          <div className="logo-circle">
            💬
          </div>

          <div>

            <h1>Realtime Chat</h1>

            <p>Supabase Realtime</p>

          </div>

        </div>

        <div className="status">

          <span className="dot"></span>

          Online

        </div>

      </div>

      {/* Messages */}

      <MessageList messages={messages} />

      <div ref={bottomRef}></div>

      {/* Input */}

      <MessageInput
        username={username}
        setUsername={setUsername}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />

    </div>
  );
}

export default Chat;