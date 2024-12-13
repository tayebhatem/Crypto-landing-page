import clsx from "clsx";
import { CointItemType } from "../types";
import Button from "./button";

const CryptoTable = ({ coinData }: { coinData: CointItemType[] }) => {
  return (
    <div className="rounded-md bg-card border border-white/5 overflow-x-auto scrollbar">
      <table className="w-full">
        <thead>
          <tr className="text-light-subtitle font-roboto font-medium bg-card">
            <th className="px-6 py-4 text-left">NO</th>
            <th className="px-6 py-4 text-left">NAME</th>
            <th className="px-6 py-4 text-left text-nowrap">LAST PRICE</th>
            <th className="px-6 py-4 text-left">CHANGE</th>
            <th className="px-6 py-4 text-left text-nowrap">MARKET STATS</th>
            <th className="px-6 py-4 text-left">TRADE</th>
          </tr>
        </thead>
        <tbody>
          {coinData.length > 0 ? (
            coinData.map(({ id, caption, change, lastPrice, logo, marketState, name }) => (
              <tr className="text-light-subtitle bg-card border border-white/5" key={id}>
                <td className="px-6 py-4 text-left font-roboto">{id}</td>
                <td className="px-6 py-4 text-left flex flex-row items-center gap-x-6">
                  <img src={logo} className="object-contain max-sm:h-10 h-12" alt="coin" />
                  <div className="flex flex-row items-center gap-x-3 font-roboto">
                    <p className="capitalize">{caption}</p>
                    <div className="w-[1px] h-[24px] bg-[#403A3A]" />
                    <p className="uppercase">{name}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-left font-roboto">{lastPrice}</td>
                <td className={clsx("px-6 py-4 text-left font-roboto", change < 0 && "text-[#AE0000]")}>
                  {change}%
                </td>
                <td className="px-6 py-4 text-left">
                  <img src={marketState} className="object-contain" alt="market state" />
                </td>
                <td className="px-6 py-4 text-left">
                  <Button>Trade</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-20 text-light-subtitle">
                No coins found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
