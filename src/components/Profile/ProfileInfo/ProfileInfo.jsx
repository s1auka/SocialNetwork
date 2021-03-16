import profileStyle from './ProfileInfo.module.css';
import defaultImage from "../../../assets/images/default-logo.png";
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                <img className={profileStyle.layout} src="https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-EU-Site/-/EKO/en_EU/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" alt='' />
            </div>
            <div className={profileStyle.person}>
                <div className={profileStyle.foto}>
                    <img src={props.userProfile.photos.small || defaultImage} alt='' />
                    {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
                </div>
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