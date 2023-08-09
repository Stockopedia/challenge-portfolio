import { useRouter } from "next/router"
import styles from './not-found.module.scss'

export default function PortfolioNotFound() {
  const { query: { portfolioId } } = useRouter()

  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__card}>
        <h1 className={styles.notFound__title}>Portfolio not found</h1>
        
        <p className={styles.notFound__text}>We apologise, but we could not locate a portfolio associated with the ID {portfolioId}.</p>
      </div>
    </div>
  )
}