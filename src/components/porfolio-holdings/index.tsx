import { SecurityHoldings } from '@/models/portfolio'
import { PortfolioHoldingsHeader } from './portfolio-holdings-header'
import { PortfolioHoldingsSectors } from './portfolio-holdings-sectors'
import { PortfolioHoldingsTable } from './portfolio-holdings-table'
import styles from './portfolio-holdings.module.scss'

interface PortfolioHoldingsProps {
 holdings: SecurityHoldings[]
}

export function PortfolioHoldings(props: PortfolioHoldingsProps) {
  return (
    <div className={styles.portfolioHoldings}>
      <div className={styles.portfolioHoldings__headerContainer}>
        <PortfolioHoldingsHeader holdingsCount={props.holdings.length}/>
      </div>
      <div className={styles.portfolioHoldings__sectionContainer}>
        <PortfolioHoldingsSectors sectors={props.holdings.map(h => h.sector)}/>
      </div>
      <div>
        <PortfolioHoldingsTable holdings={props.holdings}/>
      </div>
    </div>
  )
}