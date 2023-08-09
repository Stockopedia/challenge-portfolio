import styles from './portfolio-holdings-sectors.module.scss'

interface PortfolioHoldingsSectorsProps {
  sectors: string[]
}

export function PortfolioHoldingsSectors(props: PortfolioHoldingsSectorsProps) {
  return (
    <div className={styles.sectors}>
      <p className={styles.sectors__label}>Sectors:</p>
      <div className={styles.sectors__pillContainer}>
        {props.sectors.map(sector => (
          <span className={styles.sectors__pill}>{sector}</span>
        ))}
      </div>
    </div>
  )
}