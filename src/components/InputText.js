export default function InputText({ type, name, value, placeholder, ...rest }) {
  return (
    <input
    className="inputText"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      {...rest}
    />
  )
}
