export default function Spinner() {
  return (
    <div className="spinner-wrap" role="status" aria-label="Loading">
      <div className="orbit">
        <div className="orbit-dot" />
        <div className="orbit-dot" />
        <div className="orbit-dot" />
      </div>
    </div>
  );
}
