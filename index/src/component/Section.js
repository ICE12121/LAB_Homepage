function Section({ title, description, imgSrc }) {
  return (
    <div className="section">
      <img src={imgSrc} alt={title} />
      <div className="fs-5 fw-bold text-muted">{title}</div>
      <p>{description}</p>
    </div>
  );
}
export default Section;
