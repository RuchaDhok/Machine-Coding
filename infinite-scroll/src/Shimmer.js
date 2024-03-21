const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(20)
        .fill()
        .map((n, i) => (
          <div key={i} className="shimmer-card"></div>
        ))}
    </div>
  );
};
export default Shimmer;
