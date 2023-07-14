import { useSelector } from "react-redux";


export default function ProfilePreview() {
    let user = useSelector(state => state.userStore.user);
    return (
        <div className="card">
            <img src={user.userImageLink} alt="Profile Picture" width="35" height="35"/>
        </div>
    );
}