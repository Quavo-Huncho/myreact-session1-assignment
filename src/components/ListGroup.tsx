function ListGroup() {

  const topics = [
    "What is React",
    "Folder structure in React",
    "JSX",
    "Rendering lists",
    "Conditional rendering"
  ];

  // Conditional rendering
  if (topics.length === 0) {
    return <p>No topics available.</p>;
  }

  return (
    <div>
      <h2>React Topics</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
