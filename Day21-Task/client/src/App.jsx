import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import Login from "./components/Login";
import FileUpload from "./components/FileUpload";
import FileList from "./components/FileList";

export default function App() {
  const [session, setSession] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAuthSuccess = (nextSession) => {
    setSession(nextSession);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (!session) {
    return (
      <div className="page">
        <Login onAuthSuccess={handleAuthSuccess} />
      </div>
    );
  }

  return (
    <div className="page">
      <header className="top-bar">
        <h1>File Sharing App</h1>
        <div>
          <span className="user-email">{session.user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <main>
        <FileUpload
          userId={session.user.id}
          onUploaded={() => setRefreshKey((k) => k + 1)}
        />
        <h3>Your Files</h3>
        <FileList userId={session.user.id} refreshKey={refreshKey} />
      </main>
    </div>
  );
}
