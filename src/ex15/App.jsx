import Counter from "./Counter";
import QuestionBank from "./QuestionBank";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>1. Counter with useReducer</h1>
      <Counter />

      <h1>2. Question Bank</h1>
      <QuestionBank />
    </div>
  );
}
