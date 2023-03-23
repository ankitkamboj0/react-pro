import { createContext } from 'react'

export default UserContext = createContext({
    user:{
        name:"Dummy name",
        email:"test@gmail.com"
    }
})