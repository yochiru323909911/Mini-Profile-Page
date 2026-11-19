import styles from './Button.module.css'

function Button({ personType, children }) {
  const variant = personType.toLowerCase()

  return (
    <button className={`${styles.button} ${styles[variant]}`} type="button">
      {children}
    </button>
  )
}

export default Button
