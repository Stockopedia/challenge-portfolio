import { PortfolioHoldingsSectors } from './index';
import { render, screen } from "@testing-library/react";

describe(PortfolioHoldingsSectors.name, () => {
  it("should render the sector labels correctly", () => {
    render(
      <PortfolioHoldingsSectors 
        sectors={[
          { id: 1, name: 'test 1'},
          { id: 1, name: 'test 1'},
          { id: 2, name: 'test 2'}
        ]} 
      />
    )

    const pills = screen.getAllByTestId('sector-pill');
    expect(pills.length).toEqual(2)
  });
});
