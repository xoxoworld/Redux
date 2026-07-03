import AddNumber from "./AddNumber";

export default function AddNumberRoot({ onClick }) {
  return (
    <div>
      <h2>AddNumberRoot</h2>
      <AddNumber onClick={onClick} />
    </div>
  );
}
