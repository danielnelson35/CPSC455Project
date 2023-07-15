import { useSelector } from "react-redux";


export default function ProfilePreview() {
    let user = useSelector(state => state.userStore.user);
    return (
        <div className="card">
            <img src={user.userImageLink ?? "https://i.pinimg.com/564x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg" } alt="Profile Picture" width="35" height="35"/>
        </div>
    );
}