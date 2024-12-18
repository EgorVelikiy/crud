import getData from "./get"

export default async function postData(data: FormDataEntryValue) {
    const url = 'http://localhost:7070/notes'

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "content": data })
    })

    const newData = await getData()
    return newData
}