import { useState } from "react";
import { supabase, BUCKET_NAME } from "../supabaseClient";

export default function FileUpload({ userId, onUploaded }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setError("");

    const filePath = `${userId}/${Date.now()}_${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file);

    setUploading(false);

    if (uploadError) {
      setError(
        uploadError.message.includes("policy")
          ? "Upload blocked by Supabase storage policy. Please create the files bucket and add the storage policies from the README."
          : uploadError.message
      );
      return;
    }

    setFile(null);
    onUploaded(); // refresh file list in parent
  };

  return (
    <form className="upload-box" onSubmit={handleUpload}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit" disabled={!file || uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {error && <p className="error-text">{error}</p>}
    </form>
  );
}
