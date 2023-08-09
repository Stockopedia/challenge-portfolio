import { PortfolioHoldingsTable } from './index';
import { render, screen } from "@testing-library/react";

describe(PortfolioHoldingsTable.name, () => {
  it("should render the positive change cell correctly", () => {
    render(
      <PortfolioHoldingsTable 
        holdings={[{
          name: 'Test',
          sector: {
            id: 1,
            name: 'Testing'
          },
          shares: 100,
          lastPrice: 500,
          change: 20,
          id: 123
        }]} 
      />
    )

    const changeCell = screen.getByRole('cell', { name: '+20' });
    expect(changeCell).toBeInTheDocument();
    expect(changeCell).toHaveStyle('color: #228745DE')
  });
  
  it("should render the negative change cell correctly", () => {
    render(
      <PortfolioHoldingsTable 
        holdings={[{
          name: 'Test',
          sector: {
            id: 1,
            name: 'Testing'
          },
          shares: 100,
          lastPrice: 500,
          change: -20,
          id: 123
        }]} 
      />
    )

    const changeCell = screen.getByRole('cell', { name: '-20' });
    expect(changeCell).toBeInTheDocument();
    expect(changeCell).toHaveStyle('color: #CC4752DE')
  });
  
  it("should format the last price cell correctly", () => {
    render(
      <PortfolioHoldingsTable 
        holdings={[{
          name: 'Test',
          sector: {
            id: 1,
            name: 'Testing'
          },
          shares: 100,
          lastPrice: 5456,
          change: -20,
          id: 123
        }]} 
      />
    )

    const lastPriceCell = screen.getByRole('cell', { name: '5,456.00p' });
    expect(lastPriceCell).toBeInTheDocument();
  });

  it("should format the shares cell correctly", () => {
    render(
      <PortfolioHoldingsTable 
        holdings={[{
          name: 'Test',
          sector: {
            id: 1,
            name: 'Testing'
          },
          shares: 1500,
          lastPrice: 5456,
          change: -20,
          id: 123
        }]} 
      />
    )

    const sharesCell = screen.getByRole('cell', { name: '1,500' });
    expect(sharesCell).toBeInTheDocument();
  });
});
