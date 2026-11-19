import Button from './Button'
import styles from './ProfileCard.module.css'

function ProfileCard({ name, description, personType, initials }) {
  return (
    <article className={styles.card}>
      <div
        className={`${styles.avatar} ${styles[personType.toLowerCase()]}`}
        role="img"
        aria-label={`${name}'s avatar`}
      >
        {initials}
      </div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <Button personType={personType}>Connect</Button>
    </article>
  )
}

export default ProfileCard
