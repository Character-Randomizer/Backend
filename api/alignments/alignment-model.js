const db = require(`../../data/dbConfig`)


const getAllAlign = () => {
    return db(`Alignments`)
}

const getAlignBy = (filterName, filterValue) => {
    switch (filterName){
        case 'alignment':
            return db('Alignments').where({alignment: filterValue}).first();
        case 'alignment_id':
            return db('Alignments').where({alignment_id: filterValue}).first();
        case 'alignment_acronym':
            return db('Alignments').where({alignment_acronym: filterValue}).first();
        default:
            return [];
    }
}


module.exports = {
    getAllAlign,
    getAlignBy
}