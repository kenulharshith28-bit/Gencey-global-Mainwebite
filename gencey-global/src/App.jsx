import Navbar from "./components/Navbar";

function App(){
  return(
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <Navbar />

    <div className="text-center">
      <h1 className="text-3xl font-bold text-white">Gencey
        <span className="text-gray-400 mt-4 text-lg"></span>
      </h1>

      <p className="text-gray-400 mt-4 text-lg">React website developement has  started.
      </p>

      <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
        Let's Build
      </button>
    </div>

    </div>
  )
}

export default App;