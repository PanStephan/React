export default class GotService {
  readonly apiBase: string = 'https://www.anapioficeandfire.com/api/'

  getRes = async (url: string) : Promise<any> => {
    const res = await fetch(`${this.apiBase+url}`)
    if(!res.ok) {
      throw new Error(`${res.status}`);
    }
    return await res.json()
  }

  getAllCharecters = async () : Promise<any> => {
    const res = await this.getRes(`characters?page=4&pageSize=5`)
    return res.map(this._transformCharacter)
  }

  getCharacter = async (id : number) : Promise<any> => {
    const character = await this.getRes(`characters/${id}`)
    return this._transformCharacter(character)
  }

  getAllBooks = () : Promise<any> => {
    return this.getRes(`books?page=4&pageSize=5`)
  }

  getBooks = (id : number) : Promise<any> => {
    return this.getRes(`books/${id}`)
  }

  getAllHouses = () : Promise<any> => {
    return this.getRes(`houses?page=4&pageSize=5`)
  }

  getHouses = (id : number) : Promise<any> => {
    return this.getRes(`houses/${id}`)
  }

  _transformCharacter(char : object) : object {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died, 
      culture: char.culture
    }
  }

  _transformHouses(house: object) : object {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      title: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons
    }
  }

  transformBook(book : object) : object {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publiser: book.publiser,
      released: book.released
    }
  }

}


