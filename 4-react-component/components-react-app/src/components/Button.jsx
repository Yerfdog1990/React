// Button component - A reusable button that accepts props
// Props: text (button label), onClick (callback function), style (optional CSS class)

export default function Button({ text, onClick, style = 'btn-primary' }) {
  return (
    <button className={`btn ${style}`} onClick={onClick}>
      {text}
    </button>
  );
}
