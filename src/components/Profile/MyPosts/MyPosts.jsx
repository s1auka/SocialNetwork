import componentStyle from './MyPosts.module.css';
import OldPost from './OldPost/OldPost';

const MyPosts = () => {
    return (
        <div className={componentStyle.posts}>
            <h3>My Posts</h3>
            <form action="">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </form>
            <OldPost message="Lorem Ipsum is simply dummy text of the printing" />
            <OldPost message="and typesetting industry. Lorem Ipsum has been the industry's standard" />
            <OldPost message="dummy text ever since the 1500s, when an unknown printer took a galley" />
        </div>
    )
}

export default MyPosts;