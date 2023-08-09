import { SecurityHoldings } from '@/models/portfolio'
import styles from './portfolio-holdings-table.module.scss'

interface PortfolioHoldingsTableProps {
  holdings: SecurityHoldings[]
}

const sharesFormatter = new Intl.NumberFormat('en-GB')
const priceFormatter = new Intl.NumberFormat('en-GB', {
  minimumFractionDigits: 2
})

export function PortfolioHoldingsTable(props: PortfolioHoldingsTableProps) {

  return (
    <div className={styles.portfolioHoldingsTable}>
      <table className={styles.portfolioHoldingsTable__table}>
        <thead>
          <tr>
            <th className={`${styles.portfolioHoldingsTable__tableLeftCell} ${styles.portfolioHoldingsTable__tableNameCell}`}>Name</th>
            <th className={styles.portfolioHoldingsTable__tableLeftCell}>Sector</th>
            <th className={styles.portfolioHoldingsTable__tableRightCell}>Shares</th>
            <th className={styles.portfolioHoldingsTable__tableRightCell}>Last Price</th>
            <th className={styles.portfolioHoldingsTable__tableRightCell}>Change</th>
          </tr>
        </thead>
        <tbody>
          { props.holdings.map(holding => (
            <tr>
              <td className={`${styles.portfolioHoldingsTable__tableLeftCell} ${styles.portfolioHoldingsTable__tableNameCell}`}>{holding.name}</td>
              <td className={styles.portfolioHoldingsTable__tableLeftCell}>{holding.sector.name}</td>
              <td className={styles.portfolioHoldingsTable__tableRightCell}>{sharesFormatter.format(holding.shares)}</td>
              <td className={styles.portfolioHoldingsTable__tableRightCell}>{priceFormatter.format(holding.lastPrice)}p</td>
              <td 
                className={styles.portfolioHoldingsTable__tableRightCell}
                style={{
                  color: holding.change > 0 ? '#228745DE' : '#CC4752DE'
                }}
              >
                {holding.change > 0 ? `+${holding.change}` : holding.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}