const db = require(`../../data/dbConfig`)


const getAll= () => {
    return db(`Races`)
}

const getRaceBy = (filterName, filterValue) => {
    switch (filterName){
        case 'race':
            return db('Races').where({race: filterValue}).first();
        case 'race_id':
            return db('Races').where({race_id: filterValue}).first();
        default:
            return [];
    }
}


module.exports = {
    getAll,
    getRaceBy
}