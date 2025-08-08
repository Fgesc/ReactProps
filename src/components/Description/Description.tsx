import { UserProfileType } from '../../interface';
import './Description.css';


function Description({defaultUserPhoto, userProfile}: UserProfileType) {
    const actualProtoUrl = userProfile.protoUrl || defaultUserPhoto;
    return (
    <div className="description">
        <img className="photo--default" src={actualProtoUrl} alt="Avatar"/>
        <h4>{userProfile.userName}</h4>
        <p>{userProfile.userDescription}</p>
        <p>{userProfile.openForWork ? "В поиске работы" : "Работаю на трех работах"}</p>
    </div>
    )
}

export default Description;