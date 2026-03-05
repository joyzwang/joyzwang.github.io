function Highlight({ content }) {
  if (!content) {
    return;
  }

  return (
    <div
      className="highlight"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}
export default Highlight;
