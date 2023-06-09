import { useSelector } from "react-redux";


export default function ProfilePreview() {
    let username = useSelector(state => state.username);
    return (
        <div class="card">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Profile Picture" width="175" height="175" />
            <h1>
                {username}
            </h1>
        </div>
    );
}