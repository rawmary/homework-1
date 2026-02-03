interface PostCardProps {
    title: string;
    content: string;
}
const PostCard = ({ title, content }: PostCardProps) => {
    return (
        <>
        <h2>{title}</h2>
        <p>{content}</p>
        </>
    );
}

export default PostCard;