const db = require(`../../data/dbConfig`)


const getAll = () => {
    return db(`Class_Focuses`)
}

const getFocusBy = (filterName, filterValue) => {
    switch (filterName){
        case 'class_focus':
            return db('Class_Focuses').where({class_focus: filterValue}).first();
        case 'focus_id':
            return db('Class_Focuses').where({focus_id: filterValue}).first();
        case 'class_id':
            return db('Class_Focuses').where({class_id: filterValue});
        default:
            return [];
    }
}


module.exports = {
    getAll,
    getFocusBy
}