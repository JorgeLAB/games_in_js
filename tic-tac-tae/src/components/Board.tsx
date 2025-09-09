import Square from "./Square";

function Board() {
    return (
      <div className="mx-auto grid grid-cols-3 gap-4 max-w-[26rem]">
        <Square />
        <Square />
        <Square />

        <Square />
        <Square />
        <Square />

        <Square />
        <Square />
        <Square />
      </div>
    )
}

export default Board;