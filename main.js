// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef

async function getChefBirthday(id) {

    try {
        const responseRicetta = await fetch(`https://dummyjson.com/recipes/${id}`);
        const ricetta = await responseRicetta.json();
        console.log(ricetta);
        const responseUser = await fetch(`https://dummyjson.com/users/${ricetta.userId}`);
        const user = await responseUser.json();
        console.log(user);
        const chef = user.birthDate
        return chef
    } catch (error) {
        console.error('Si è verificato un errore', error.message)
    } finally {
        console.log();
    }


}

getChefBirthday(1)
    .then(birthday => console.log('La data dello chef è:', birthday))
    .catch(error => console.log('errore', error.message))
    .finally(() => console.log('Operazione riuscita'))
