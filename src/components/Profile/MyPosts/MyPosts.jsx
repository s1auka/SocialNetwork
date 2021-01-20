import componentStyle from './MyPosts.module.css';
import OldPost from './OldPost/OldPost';

const MyPosts = (props) => {

    let oldMessagesComponents = props.contentMessages.map(el => {
        return (
            <OldPost message={el} />
        );
    })

    return (
        <div className={componentStyle.posts}>
            <h3>My Posts</h3>
            <form action="">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </form>
            {oldMessagesComponents}
        </div>
    )
}

export default MyPosts;