import componentStyle from './OldPost.module.css';

const OldPost = (props) => {
    return (
        <div className={componentStyle.oldPost}>
            {props.message}
        </div>
    )
}

export default OldPost;