
export const deleteFile = async(id: string):Promise<boolean> => {
    await fetch('/api/files/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

    return true
}