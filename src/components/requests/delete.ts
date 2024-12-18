import getData from "./get"

export default async function deleteItem(id: string) {
    const url = `http://localhost:7070/notes/${id}`

    const response = await fetch(url, {
        method: 'DELETE',
    })

    const newData = await getData()
    return newData
}