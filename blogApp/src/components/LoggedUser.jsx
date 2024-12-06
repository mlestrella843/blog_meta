import { useUser } from "../context/userContext"

const LoggedInUser = () => {
    const {user} = useUser();
    return (
        <p>
          Hello, <span>{user.name} !</span>
        </p>
    )
}
export default LoggedInUser