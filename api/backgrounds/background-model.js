const db = require(`../../data/dbConfig`)


const getAll = () => {
    return db(`Backgrounds`)
}

const getBackgroundBy = (filterName, filterValue) => {
    switch (filterName){
        case 'background':
            return db('Backgrounds').where({background: filterValue}).first();
        case 'background_id':
            return db('Backgrounds').where({background_id: filterValue}).first();
        case 'background_name':
            return db('Backgrounds').where({background_name: filterValue}).first();
        default:
            return [];
    }
}


module.exports = {
    getAll,
    getBackgroundBy
}