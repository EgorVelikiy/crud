import NotesItem from "./NotesItem/NotesItem"
import './NotesList.css'

export interface NotesItemParams {
    id: string,
    content: string
}

interface NotesListParams {
    data: NotesItemParams[] | [],
    onDelete: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
}

export default function NotesList(props: NotesListParams) {
    const {data, onDelete} = props
    return (
        <div className="notes-list-container">
            <ul className="notes-list">
                {data.map((item, index) => {
                    return (
                        <NotesItem item={item} onDelete={onDelete} key={index}/>
                    )
                })}
            </ul>
        </div>
    )
}