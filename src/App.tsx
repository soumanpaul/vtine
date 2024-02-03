import { useState } from "react";
import './index.css';
import { FaRegHeart, FaTimes } from "react-icons/fa";

export default function App() {

  const [noCount, setNoCount] = useState(0);

  function handleClickNo() {
    setNoCount((prevCount) => prevCount + 1);
  }

  function handleClickYes() {
    setNoCount(0); // reset the count on affirmative answer
    setIsExcited(true);
  }

  const phrases = [
    "",
    "Are you sure, No? ",
    "Really sure, No?",
    "Think again Souji ?",
    "Last chance Souji ?",
    "Surely not?",
    "You might regret this Souji ?",
    "Give it another thought Souji ?",
    "Are you absolutely certain?",
    "This could be a mistake Souji ?",
    "Have a heart for me souji!",
    "Don't be so cold Souji ?",
    "Wouldn't you reconsider?",
    "What is your final answer?",
    "You're breaking my heart Souji;(",
    "Now i am dead 💀"
  ];

  const getNoButtonText = () => {
     return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const [isExcited, setIsExcited] = useState(false);
// bg-cyan-500
  return (
    <div className="h-fit m-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-cyan-500 shadow-2xl">
      {isExcited ? (
        <>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Good, You are my girl 🤗 call me at 7980319366</h1>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Excited bear"  />
          <button
          onClick={() => location.reload()}
              className="bg-[#FF5A5F] text-white rounded-lg px-4 py-2 shadow-md hover:bg-[#ff3b54] transform hover:scale-105 transition-all duration-150 ease-out mt-8"
          
          >Start again</button>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Souji will you be my valentine?</h1>
          <p className="text-xl text-gray-600 mb-6">Choose wisely!</p>
         {!noCount ?
          <img  src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" alt="Bear with roses" className={`rounded-lg h-[150px]`} /> :
          <img  src="https://i.pinimg.com/originals/48/83/da/4883dac105f5ddca6122bdf901a5d92e.gif" alt="Bear with roses" className={`rounded-lg h-[150px]`} />
         }

        <div className="mt-6">
          {getNoButtonText() != "" &&
          <button
              className="bg-gray-200 text-gray-900 rounded-lg px-6 py-2 shadow-md hover:bg-gray-300 transform hover:scale-105 transition-all duration-150 ease-out"
            >
              { getNoButtonText()} 
            </button>
            }
        </div>

          <div className="flex space-x-4 mt-10">
            <button
              id="yes-button"
              onClick={handleClickYes}
              className="bg-[#FF5A5F] text-white rounded-lg px-4 py-2 shadow-md hover:bg-[#ff3b54] transform hover:scale-105 transition-all duration-150 ease-out"
            >
              <span id="yes-text">Yes i will</span> <FaRegHeart className="h-6 w-6 inline ml-1" />
            </button>
            <button
              onClick={handleClickNo}
              className="bg-gray-200 text-gray-800 rounded-lg px-6 py-2 shadow-md hover:bg-gray-300 transform hover:scale-105 transition-all duration-150 ease-out"
            >
               No  <FaTimes className="h-6 w-3 inline ml-1" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}