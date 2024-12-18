import { FormEventHandler } from 'react'
import './NotesForm.css'

interface NotesFormParams {
    onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void,
    onInputHandle: (FormEventHandler<HTMLTextAreaElement>),
    value: {
        text: string
    }
}

export default function NotesForm(props: NotesFormParams) {
    const {onSubmitForm, onInputHandle, value} = props
    return (
        <div className="form-container">
            <h3 className="title">New note</h3>
            
            <form className="notes-form" onSubmit={onSubmitForm}>
                <textarea className="note-content" id='text' name='text' onInput={onInputHandle} value={value.text} required>
                
                </textarea>

                <button className='submit-btn' type='submit'>&#x2709;</button>
            </form>
        </div>
    )
}