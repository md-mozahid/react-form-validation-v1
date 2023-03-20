import { GetClasses } from './GetClasses'

export default function Button({ children, type, variant, ...rest }) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={GetClasses(['button', [`button--${variant}`]])}
      {...rest}>
      {children}
    </button>
  )
}
