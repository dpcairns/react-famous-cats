import request from 'superagent';

export const getCharacter = (charId) => request.get(`https://rickandmortyapi.com/api/character/?name=${charId}`)