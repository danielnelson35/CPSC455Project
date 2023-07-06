import { useSelector } from "react-redux";


export default function ProfilePreview() {
    let user = useSelector(state => state.userStore.user);
    return (
        <div className="card">
            <img src={user.userImageLink} alt="Profile Picture" width="175" height="175" />
            <h1>
                {user.username}
            </h1>
        </div>
    );
}