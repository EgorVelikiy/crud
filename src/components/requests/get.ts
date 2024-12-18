export default async function getData() {
    const url = 'http://localhost:7070/notes'

    const response = await fetch(url)

    const result = await response.json()

    return result
}