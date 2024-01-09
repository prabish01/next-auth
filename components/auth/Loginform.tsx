import { CardWrapper } from "@/app/auth/Card-wrapper"
import { register } from "module"

export const Loginform = () => {
    return (
        <CardWrapper
            headerLabel="Welcome to the login portal"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial        >
            

            
            Login Form
        
        </CardWrapper>
    )
    
}