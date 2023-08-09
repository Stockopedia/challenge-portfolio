import { Portfolio } from "@/models/portfolio"

export class PortfolioNotFoundError extends Error {}

export const getPortfolioJSON = async (portfolioId: string): Promise<Portfolio> => {
  const req = await fetch(`/api/portfolio/${portfolioId}`)

  if (req.status === 404) {
    throw new PortfolioNotFoundError()
  }

  const json = await req.json()
  return json
}