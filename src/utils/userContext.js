import { createContext } from 'react'

const UserContext = createContext({
    user:{
        name:"a ssss",
        email:"test@gmail.com"
    }
})

UserContext.displayName="UserContext";
export default UserContext;