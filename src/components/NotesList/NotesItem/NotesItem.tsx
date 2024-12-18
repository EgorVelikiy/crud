import { NotesItemParams } from "../NotesList"
import './NotesItem.css'

interface NotesItemParamsFinal {
    item: NotesItemParams,
    onDelete: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
}

export default function NotesItem(props: NotesItemParamsFinal) {
    const {item, onDelete} = props
    return (
        <li className="note" id={item.id}>
            <span className="close-btn" onClick={onDelete}>&#x2715;</span>
            <div className="note-container">
                {item.content}
            </div>
        </li>
    )
}