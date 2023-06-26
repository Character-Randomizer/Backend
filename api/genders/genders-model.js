const db = require(`../../data/dbConfig`)


const getAll = () => {
    return db(`Genders`)
}

const getGenderBy = (filterName, filterValue) => {
    switch (filterName){
        case 'gender':
            return db('Genders').where({gender: filterValue}).first();
        case 'gender_id':
            return db('Genders').where({gender_id: filterValue}).first();
        default:
            return [];
    }
}


module.exports = {
    getAll,
    getGenderBy
}