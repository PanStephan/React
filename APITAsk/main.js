class GotService {

  #apiBase = 'https://www.anapioficeandfire.com/api/'

  getRes = async (url) => {
    const res = await fetch(`${this.#apiBase+url}`)
    if(!res.ok) {
      throw new Error(`url: ${url}, status: ${status}`);
    }
    return await res.json()
  }

  getAllCharacters = () => {
    return this.getRes(`characters?page=5&pageSize=10`)
  }

  getCharacter = id => {
    return this.getRes(`characters/${id}`)
  }
}

const FirstGotService = new GotService()
FirstGotService.getAllCharacters()
  .then(res => {
    res.forEach(el => {
      console.log(el.name)
    })
  })
  .catch(err => console.error(err))

