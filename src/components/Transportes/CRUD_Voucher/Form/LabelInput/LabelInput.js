
export default function LabelInput({ value, handle, text }) {

  return (
      <label>
      {text}
      <input value={value} type="text" placeholder={`Introduce tu(s) ${text}...`} onChange={handle} />
    </label>
  );
}