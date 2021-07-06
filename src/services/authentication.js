const arr=[{authKey:'123456789',password:'srinath'}]
async function login(authKey, password) {
    try {
            const result = {status: false};
            console.log("authkey: ",authKey);
            const user=arr.find(obj=>obj.authKey===authKey && obj.password===password)
            if(!user){
                result.message = 'Invalid email or username';
                return result;        
            }else{
                result.status=true;
                result.token='abcdefgh';
                result.uuid='123456789'
            }
     
      return result;
    }
    catch (err) {
      throw new Error(err);
    }
  }
  
  exports.userLogin = async ({authKey, password}) => {
    try {
        console.log(authKey,password)
      const result = await login(authKey, password);
      return result;
    }
    catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
  