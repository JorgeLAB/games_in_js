import { Player } from "../types";

type SquareProps = {
  value: Player | null;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
    return (
      <button 
        className="h-32 w-32 border-4 border-gray-500 rounded-xl text-4xl font-bold"
        onClick={onClick}>
        {value}
      </button>
    )
}

export default Square;
