// app/notes/error.tsx
'use client';
import css from "./Notes.module.css"

type Props = {
    error: Error;
    reset: ()=>void
};  

const Error = ({ error, reset }: Props) => {
  return (
    <div>
      <h2>Помилка при завантаженні</h2>
        <p>{error.message}</p>
        <button className={css.btnGetNotes} onClick={reset}>Try agayn</button>
    </div>
  );
}

export default Error;
