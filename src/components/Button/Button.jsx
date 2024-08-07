import "./Button.css"

export default function Button({ children, style, click, id, active }) {
  return (
    <button
      id={id}
      className={style}
      onClick={click}
    >
      {children}
    </button>
  )
}