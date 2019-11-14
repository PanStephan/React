export default class GotService {
  readonly apiBase: string = 'https://www.anapioficeandfire.com/api/'

  getRes = async (url: string) : Promise<any> => {
    // не знаю, как тут быть в тс, у нас жу тип респонса должен быть обьекта, но компилятор ругается )
    const res = await fetch(`${this.apiBase+url}`)
    if(!res.ok) {
      throw new Error(`url: ${url}, status: ${res.status}`);
    }
    return await res.json()
  }

  // у меня что-то не получилось сделать все красиво циклом, на самом деле так и не понял почему так:/
  getAllCharecters = () : Promise<any> => {
    return this.getRes(`characters?page=2&pageSize=10`)
  }

  getCharacter = (id : string) : Promise<any> => {
    return this.getRes(`characters/${id}`)
  }

  getAllBooks = () : Promise<any> => {
    return this.getRes(`books?page=2&pageSize=10`)
  }

  getBooks = (id : string) : Promise<any> => {
    return this.getRes(`books/${id}`)
  }

  getAllHouses = () : Promise<any> => {
    return this.getRes(`houses?page=2&pageSize=10`)
  }

  getHouses = (id : string) : Promise<any> => {
    return this.getRes(`houses/${id}`)
  }

}


