import { SecurityHoldings } from '@/models/portfolio'
import { PortfolioHoldingsHeader } from './portfolio-holdings-header'
import { PortfolioHoldingsSectors } from './portfolio-holdings-sectors'
import { PortfolioHoldingsTable } from './portfolio-holdings-table'
import styles from './portfolio-holdings.module.scss'

interface PortfolioHoldingsProps {
 holdings: SecurityHoldings[]
}

const deduplicateSectorNames = (holdings: SecurityHoldings[]) => {
  return Array
    .from(
      new Map(
        holdings
          .flatMap(h => h.sector)
          .map(sec => [sec.id, sec.name])
      )
    )
    .map(s => s[1])
}

export function PortfolioHoldings(props: PortfolioHoldingsProps) {
  
  const sectors = deduplicateSectorNames(props.holdings)

  return (
    <div className={styles.portfolioHoldings}>
      <div className={styles.portfolioHoldings__headerContainer}>
        <PortfolioHoldingsHeader holdingsCount={props.holdings.length}/>
      </div>
      <div className={styles.portfolioHoldings__sectionContainer}>
        <PortfolioHoldingsSectors sectors={sectors}/>
      </div>
      <div>
        <PortfolioHoldingsTable holdings={props.holdings}/>
      </div>
    </div>
  )
}