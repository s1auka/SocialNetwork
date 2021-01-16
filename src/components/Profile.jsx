const Profile = () => {
    return (
        <div className="content">
            <div>
                <img className="main-layout" src="https://media.ekosport.fr/INTERSHOP/static/WFS/EKO-EU-Site/-/EKO/en_EU/Medias/images_espace_marque_1402x250px/ambiance_picture19.jpg" />
            </div>
            <div className="content__person">
                <img src="https://www.logodesign.net/logo/line-camera-square-with-shadow-4506ld.png" className="content__person-foto" />

                <div className="content__info">
                    <div>Name Surname</div>
                    <div>About me</div>
                    <div>About me</div>
                    <div>About me</div>
                    <div>About me</div>
                </div>

            </div>
            <div className="posts">
                <h3>My Posts</h3>
                <form action="">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </form>
                <div className="posts__old-post">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </div>
                <div className="posts__old-post">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </div>
            </div>
        </div>
    )
}

export default Profile;