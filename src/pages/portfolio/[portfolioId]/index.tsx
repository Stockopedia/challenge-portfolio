import { PresentationPortfolio, createPresentationPortfolio } from "@/models/portfolio"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { PortfolioHeader } from "@/components/portfolio-header"
import { PortfolioHoldings } from "@/components/porfolio-holdings"
import styles from './portfolio.module.scss'
import { PortfolioNotFoundError, getPortfolioJSON } from "@/services/portfolio.service"

export default function PortfolioPage() {

  const { query: { portfolioId }, ...router } = useRouter()
  const [portfolio, setPortfolio] = useState<PresentationPortfolio | null>(null)

  useEffect(() => {
    if (typeof portfolioId !== 'string') {
      return
    }

    getPortfolioJSON(portfolioId)
      .then(data => {
        setPortfolio(createPresentationPortfolio(data))
      })
      .catch(err => {
        if (err instanceof PortfolioNotFoundError) {
          router.push(`/portfolio/${portfolioId}/not-found`)
          return 
        }

        throw new Error(err)
      })
  }, [portfolioId])

  return (
    <div className={styles.portfolio}>
      <PortfolioHeader name={portfolio?.name || ''} valuation={portfolio?.value_gbp || ''}/>
      <PortfolioHoldings holdings={portfolio?.holdings || []}/>
    </div>
  )
}