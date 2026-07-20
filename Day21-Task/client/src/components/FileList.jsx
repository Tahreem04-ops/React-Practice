import { useEffect, useState } from "react";
import { supabase, BUCKET_NAME } from "../supabaseClient";

export default function FileList({ userId, refreshKey }) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    setLoading(true);
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list(userId, { sortBy: { column: "created_at", order: "desc" } });

    if (error) {
      setFiles([]);
      setLoading(false);
      return;
    }

    setFiles(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshKey]);

  const handleDownload = async (fileName) => {
    const filePath = `${userId}/${fileName}`;
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(filePath, 60); // link valid for 60 seconds

    if (error) {
      alert(error.message);
      return;
    }

    window.open(data.signedUrl, "_blank");
  };

  const handleDelete = async (fileName) => {
    const filePath = `${userId}/${fileName}`;
    const { error } = await supabase.storage.from(BUCKET_NAME).remove([filePath]);
    if (!error) fetchFiles();
  };

  if (loading) return <p>Loading files...</p>;
  if (files.length === 0) return <p>No files uploaded yet.</p>;

  return (
    <ul className="file-list">
      {files.map((f) => (
        <li key={f.name}>
          <span>{f.name}</span>
          <div className="file-actions">
            <button onClick={() => handleDownload(f.name)}>Download</button>
            <button className="danger" onClick={() => handleDelete(f.name)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
