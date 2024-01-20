export const test = (req, res) => {
 res.json({ message: "Waan kusalamay saaxib"})
}


export const signout = (req, res, next) => {
    try {
        res.clearCookie('acess_token')
        .status(200)
        .json("User has been signed out");
    }
    catch(error){
     next(error);
    }
};