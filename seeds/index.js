const sequelize = require("../config/connection");
const {User} = require("../models");

const userSeeds = [
    {
        username:"Shiva",
        password:"meowmeow"
    },
    {
        username:"Joe",
        password:"password"
    },
    {
        username:"Bahamut",
        password:"iLoveTuna123"
    }
]

const seedMe = async ()=>{
    await sequelize.sync({force:true});
    const seededData = await User.bulkCreate(userSeeds,{
        individualHooks:true
    })
    console.table(seededData.map(usr=>usr.toJSON()))
    process.exit(0)
}
seedMe();