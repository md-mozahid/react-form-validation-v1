export default function Select({
  children,
  type,
  name,
  id,
  className,
  ...rest
}) {
  return (
    <select type={type} name={name} id={id} className={className} {...rest}>
      {children}
    </select>
  )
}
