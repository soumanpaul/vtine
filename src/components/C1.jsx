export default function Component() {
  const [noCount, setNoCount] = useState(0);

  function handleClickNo() {
    setNoCount((prevCount) => prevCount + 1);
  }

  function handleClickYes() {
    setNoCount(0); // reset the count on affirmative answer
    setIsExcited(true);
  }

  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Are you absolutely certain?",
    "This could be a mistake!",
  ];

  const getNoButtonText = () => {
     return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const [isExcited, setIsExcited] = useState(false);

  return (
    <div className="bg-white m-auto flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg">
      {isExcited ? (
        <>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Good, I expect flowers 🤗</h1>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Excited bear" />
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Will you be my valentine?</h1>
          <p className="text-xl text-gray-600 mb-10">Choose wisely, I can't wait to hear from you!</p>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" alt="Bear with roses" />

          <div className="flex space-x-4">
            <button
              id="yes-button"
              onClick={handleClickYes}
              className="bg-[#FF5A5F] text-white rounded-lg px-6 py-2 shadow-md hover:bg-[#ff3b54] transform hover:scale-105 transition-all duration-150 ease-out"
            >
              <span id="yes-text">Yes</span> <IconHeart className="h-6 w-6 inline ml-1" />
            </button>
            <button
              onClick={handleClickNo}
              className="bg-gray-200 text-gray-800 rounded-lg px-6 py-2 shadow-md hover:bg-gray-300 transform hover:scale-105 transition-all duration-150 ease-out"
            >
              {getNoButtonText()} <IconX className="h-6 w-6 inline ml-1" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}