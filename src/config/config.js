export const Location = process.env.NODE_ENV === 'development' ? 'Estoy en Desarrollo' : 'Estoy en Producción'

export const ApiURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://aprendoxd.herokuapp.com '
