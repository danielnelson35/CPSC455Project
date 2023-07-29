import { useSelector } from "react-redux";


export default function ProfilePreview() {
    let user = useSelector(state => state.userStore.user);
    return (
        <div className="card">
            <img src={user.userImageLink ?? "https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png" } alt="Profile Picture" width="35" height="35"/>
        </div>
    );
}