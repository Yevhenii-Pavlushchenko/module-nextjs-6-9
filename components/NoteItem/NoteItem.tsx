import { Note } from "@/lib/api";
import css from "./NoteItem.module.css";
import Link from "next/link";

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
    return (
       <Link href={`/notes/${item.id}`}>
            <li className={css.noteItem}>
              {item.title}
             </li>
          </Link>
  );
};

export default NoteItem;