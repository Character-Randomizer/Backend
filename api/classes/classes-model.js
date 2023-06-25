const db = require(`../../data/dbConfig`)


const getAllClasses = () => {
    return db(`Classes`)
}

const getClassBy = (filterName, filterValue) => {
    switch (filterName){
        case 'class':
            return db('Classes').where({class: filterValue}).first();
        case 'class_id':
            return db('Classes').where({class_id: filterValue}).first();
        default:
            return [];
    }
}


module.exports = {
    getAllClasses,
    getClassBy
}