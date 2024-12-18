import NotesList from "./NotesList/NotesList"
import NotesForm from "./NotesForm/NotesForm"
import RefreshWidget from "./RefreshWidget/RefreshWidget"
import getData from "./requests/get"
import deleteItem from "./requests/delete"
import postData from "./requests/post"
import { useEffect, useState } from "react"
import './MainWidget.css'


export default function MainWidget() {
    const [notes, setNotes] = useState([{id: '', content: ''}])
    const [form, setForm] = useState({text: ''})
    
    useEffect(() => {
        async function awaitData() {
          const data = await getData()
          setNotes(data)
        }

        awaitData()
    }, [])

    const onSubmitForm = async(e: any) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const body = Object.fromEntries(formData)

        const newData = await postData(body.text)

        setNotes(newData)
        setForm({text: ''})
    }

    const onRefresh = async () => {
        const newData = await getData()

        setNotes(newData)
    }

    const onDelete = async (e: any) => {
        const id = e.target.closest('li').id;
        const newData = await deleteItem(id);

        setNotes(newData);
    }

    const onInputHandle = (e: any) => {
        const { name, value} = e.target
        
        setForm(prevForm => ({...prevForm, [name]: value}))
    }

    return (
        <div className="container">
            <RefreshWidget onRefresh={onRefresh}/> 

            <NotesList data={notes} onDelete={onDelete}/>

            <NotesForm onSubmitForm={onSubmitForm} onInputHandle={onInputHandle} value={form}/> 
        </div>
    )
}