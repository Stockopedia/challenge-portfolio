import { Sector } from '@/models/sector'
import styles from './portfolio-holdings-sectors.module.scss'

interface PortfolioHoldingsSectorsProps {
  sectors: Sector[]
}

const deduplicateSectorNames = (sectors: Sector[]) => {
  return Array
    .from(
      new Map(
        sectors
          .map(sec => [sec.id, sec.name])
      )
    )
    .map(s => s[1])
}

export function PortfolioHoldingsSectors(props: PortfolioHoldingsSectorsProps) {
  const sectors = deduplicateSectorNames(props.sectors)

  return (
    <div className={styles.sectors}>
      <p className={styles.sectors__label}>Sectors:</p>
      <div className={styles.sectors__pillContainer}>
        {sectors.map((sector, i) => (
          <span 
            key={i}
            className={styles.sectors__pill}
            data-testid='sector-pill'
          >
            {sector}
          </span>
        ))}
      </div>
    </div>
  )
}