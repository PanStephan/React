export default class GotService {
  
  readonly apiBase: string = 'https://www.anapioficeandfire.com/api/'

  getRes = async (url: string) : Promise<any> => {
    const res = await fetch(`${this.apiBase+url}`)
    if(!res.ok) {
      throw new Error(`${res.status}`);
    }
    return await res.json()
  }

  getAllCharacters = async () : Promise<any> => {
    const res = await this.getRes(`characters?page=4&pageSize=5`)
    return res.map(el => this._transformCharacter(el))
  }

  getCharacter = async (id : number) : Promise<any> => {
    const character = await this.getRes(`characters/${id}`)
    return this._transformCharacter(character)
  }

  getAllBooks = async () : Promise<any> => {
    const res = await this.getRes(`books?page=1&pageSize=5`)
    return res.map(el => this._transformBook(el))
  }

  getBooks = async (id : number) : Promise<any> => {
    const character = await this.getRes(`books/${id}`)
    return this._transformBook(character)
  }

  getAllHouses = async () : Promise<any> => {
    const res = await this.getRes(`houses?page=4&pageSize=5`)
    return res.map(el => this._transformHouses(el))
  }

  getHouses = async (id : number) : Promise<any> => {
    const character = await this.getRes(`houses/${id}`)
    return this._transformHouses(character)
  }

  _generateId = (item) => {
    const regExp = /\/([0-9]*)$/
		return item.url.match(regExp)[1]
  }
  
  _isData = (data) => {
    return data ? data : 'no data'
  }

  _transformCharacter(char : IPropChar) : object {
    return {
      id: this._generateId(char),
      name: this._isData(char.name),
      gender: this._isData(char.gender),
      born: this._isData(char.born),
      died: this._isData(char.died), 
      culture: this._isData(char.culture),
    }
  }

  _transformHouses(house: IPropHouse) : object {
    return {
      id: this._generateId(house),
      name: this._isData(house.name),
      region: this._isData(house.region),
      words: this._isData(house.words),
      title: this._isData(house.titles),
      overlord: this._isData(house.overlord),
      ancestralWeapons: this._isData(house.ancestralWeapons),
    }
  }

  _transformBook(book : IPropBook) : object {
    return {
      id: this._generateId(book),
      name: this._isData(book.name),
      numberOfPages: this._isData(book.numberOfPages),
      publiser: this._isData(book.publiser),
      released: this._isData(book.released),
    }
  }
}
interface IPropChar {
  gender: string,
  born: string,
  died: string,
  culture: string
}

interface IPropHouse {
  name: string,
  region: string,
  words: string,
  titles: string,
  overlord: string,
  ancestralWeapons: string
}

interface IPropBook {
  name: string,
  numberOfPages: string,
  publiser: string,
  released: string
}


