import { createContext } from 'react'

export const UserContext = createContext({
    user:{
        name:"Dummy name",
        email:"test@gmail.com"
    }
})