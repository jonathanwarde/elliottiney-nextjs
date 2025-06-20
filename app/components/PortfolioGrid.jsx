import Image from 'next/image';
import PortfolioItem from './PortfolioItem'

export default function PortfolioGrid() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <PortfolioItem />
      </div>
      <div>
        <PortfolioItem />
      </div>
      <div>
        <PortfolioItem />
      </div>
    </div>
  );
}