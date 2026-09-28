import { useReducer } from "react";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "Which language is used to build React apps?",
      options: ["Python", "Java", "JavaScript", "C#"],
      answer: "JavaScript",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION": {
      const current = state.questions[state.currentQuestion];
      const newScore =
        state.selectedOption === current.answer ? state.score + 1 : state.score;
      const isLast = state.currentQuestion + 1 >= state.questions.length;

      return {
        ...state,
        score: newScore,
        selectedOption: "",
        currentQuestion: isLast ? state.currentQuestion : state.currentQuestion + 1,
        showScore: isLast,
      };
    }

    case "RESTART_QUIZ":
      return initialState;

    default:
      return state;
  }
}

export default function QuestionBank() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore } = state;

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };
  const handleNextQuestion = () => dispatch({ type: "NEXT_QUESTION" });
  const handleRestartQuiz = () => dispatch({ type: "RESTART_QUIZ" });

  if (showScore) {
    return (
      <div>
        <h2>
          Your score: {score} / {questions.length}
        </h2>
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isLast = currentQuestion === questions.length - 1;

  return (
    <div>
      <h3>
        Question {currentQuestion + 1} / {questions.length}
      </h3>
      <p>{question.question}</p>

      {question.options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
            />{" "}
            {option}
          </label>
        </div>
      ))}

      <button onClick={handleNextQuestion} disabled={!selectedOption}>
        {isLast ? "Finish" : "Next"}
      </button>
    </div>
  );
}
