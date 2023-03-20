export default function Label({ children, name, ...rest }) {
  return (
    <label htmlFor={name} {...rest}>
      {children}
    </label>
  )
}
