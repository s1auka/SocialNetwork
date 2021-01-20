import profileStyle from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={profileStyle.layout} src="https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-EU-Site/-/EKO/en_EU/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" alt='' />
            </div>
            <div className={profileStyle.person}>
                <img className={profileStyle.foto} src="https://www.logodesign.net/logo/line-camera-square-with-shadow-4506ld.png" alt='' />
                <div className="content__info">
                    <div>Name Surname</div>
                    <div>About me</div>
                    <div>About me</div>
                    <div>About me</div>
                    <div>About me</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;