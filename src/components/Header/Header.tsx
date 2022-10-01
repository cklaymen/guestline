import { useState } from "react";

import AmountField from "../AmountField/AmountField";
import Rating from "../Rating/Rating";

const Header: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  return (
    <header className="flex flex-col justify-center">
      <div className="h-28 bg-slate-100 justify-self-stretch" />
      <nav className="inline-flex flex-row gap-4 border-2 border-solid border-slate-300 py-1 px-4 mx-1 self-center -translate-y-1/2 bg-white select-none">
        <Rating rating={rating} onChange={setRating} />
        <div>
          Adults: <AmountField value={adults} onChange={setAdults} min={1} />
        </div>
        <div>
          Children:{" "}
          <AmountField value={children} onChange={setChildren} min={0} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
