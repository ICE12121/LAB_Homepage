function Section({ title, description, imgSrc }) {
    return (
      <div class="section">
        <img src={imgSrc} alt={title} />
        <div class="fs-5 fw-bold text-muted">{title}</div>
        <p>{description}</p>
      </div>
    );
  }
  export default Section;
  