import profileStyle from './ProfileInfo.module.css';
import defaultImage from "../../../assets/images/default-logo.png";
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={profileStyle.layout} src="https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-EU-Site/-/EKO/en_EU/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" alt='' />
            </div>
            <div className={profileStyle.person}>
                <img className={profileStyle.foto} src={props.userProfile.photos.small || defaultImage} alt='' />
                <div className="content__info">
                    <div>{props.userProfile.fullName}</div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                    <div>{props.userProfile.aboutMe}</div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;