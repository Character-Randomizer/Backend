const db = require(`../../data/dbConfig`)

const findAll = () => {
    return db(`Users`)
}

const findBy = (filter) => {
    return db(`Users`)
        .where(filter)
        .first()
}

const addUser = async (user) => {
    return await db(`Users`)
        .insert(user)
        .returning(`user_id`)
        .then(user_id => {
            return findBy(user_id[0])
        })
        .catch(err => {
            console.log(`Error occurred in users model addUser():`, err)
        })
}

const updateUser = async ({ user_id, changes }) => {
    return await db(`Users`)
        .where({ user_id: user_id })
        .update(changes)
        .returning(`*`)
        .then(result => {
            return result[0]
        })
        .catch(err => {
            console.log(`Error occurred in users model updateUser():`, err)
        })
}

const removeUser = async (user_id) => {
    const user = await findBy(user_id)
    await db(`Users`)
        .delete()
        .where(user_id)

    return user
}

module.exports = {
    findAll,
    findBy,
    addUser, 
    updateUser,
    removeUser,
}