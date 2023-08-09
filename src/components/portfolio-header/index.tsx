import styles from './portfolio-header.module.scss'

interface PortfolioHeaderProps {
  name: string
  valuation: string
}

export function PortfolioHeader(props: PortfolioHeaderProps) {
  return (
    <header className={styles.portfolioHeader}>
      <h1 className={styles.portfolioHeader__title}>{props.name}</h1>
      <div className={styles.portfolioHeader__valuation}>
        <p className={styles.portfolioHeader__valuationLabel}>Valuation</p>
        <p className={styles.portfolioHeader__valuationAmount}>{props.valuation}</p>
      </div>
    </header>
  )
}