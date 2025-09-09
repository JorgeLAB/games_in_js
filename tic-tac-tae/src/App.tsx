import { Gamepad2 } from 'lucide-react';
import Board from "./components/Board"

function App() {
  return ( <main className="bg-blue-950 min-h-screen flex flex-col items-center justify-center">
    <div className="w-full max-w-lg bg-blue-900 p-8 rounded-2xl">
      <div className='mb-8 flex items-center justify-center gap-3'>
        <Gamepad2 className='h-8 w-8 text-pink-600'/>
        <h1 className="text-4xl font-bold text-white">Tic Tac Toe</h1>
      </div>

      <div className="mb-6 text-center">
        <p className="text-xl font-semibold text-gray-100">Player X's turn</p>
      </div>
      < Board />
    </div>
  </main> );
}

export default App
