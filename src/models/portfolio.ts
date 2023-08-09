import { Security } from "@/models/security";

export interface Portfolio {
  name: string;
  id: number;
  holdings: SecurityHoldings[];
}

export interface SecurityHoldings extends Security {
  shares: number;
}

export type PresentationPortfolio = Portfolio & { value_gbp: string }

export const createPresentationPortfolio = (portfolio: Portfolio): PresentationPortfolio => {
  const portfolioValue = portfolio.holdings.reduce((acc, curr) => {
    return acc + (curr.shares * (curr.lastPrice / 100))
  }, 0)

  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  })

  return {
    ...portfolio,
    value_gbp: formatter.format(portfolioValue)
  }
}
