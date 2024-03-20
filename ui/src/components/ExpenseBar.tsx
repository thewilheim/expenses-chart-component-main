import { useState } from "react";

export const ExpenseBar = (props: {
    amount: number;
    day: string;
  }) => {
    
    const { amount, day } = props;
    const [showTooltip, setShowToolTip] = useState(false);

    const handleTooltip = () => {
      setShowToolTip(!showTooltip);
    };

    const calculateHeight = (amount: number) => {
      return Math.ceil(amount / 10) * 10;
    };
    return (
      <div className="flex flex-col p-2">
        <div className="flex flex-col justify-end h-full w-8 xl:w-10">
          <div
            onMouseOver={handleTooltip}
            onMouseLeave={handleTooltip}
            className={`relative bg-soft-red hover:bg-cyan rounded cursor-pointer`}
            style={{ height: `${calculateHeight(amount)}%` }}
          >
            <div
              className={
                showTooltip
                  ? "absolute -top-9 p-1 bg-black rounded text-white text-sm"
                  : "hidden"
              }
            >
              ${amount}
            </div>
          </div>
        </div>
        <p className="text-center">{day}</p>
      </div>
    );
  };
  