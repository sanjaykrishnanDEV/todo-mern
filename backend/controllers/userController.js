const userModal = require('../modals/userModel')
const userController = async (req,res)=>{
      const{username,email,phone} = req.body;
      try{
        const newUser = await userModal.create({username,email,phone});
        res.status(200).json(newUser);
      }
      catch(e){
        console.log(e)
      }

}
module.exports ={userController}