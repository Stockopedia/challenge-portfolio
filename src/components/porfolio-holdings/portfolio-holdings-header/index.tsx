import styles from './portfolio-holdings-header.module.scss'

interface PortfolioHoldingsHeaderProps {
  holdingsCount: number
}

export function PortfolioHoldingsHeader(props: PortfolioHoldingsHeaderProps) {
  return (
    <header className={styles.portfolioHoldingsHeader}>
      <p>Holdings ({props.holdingsCount})</p>
    </header>
  )
}