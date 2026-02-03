import PostCard from "../../entities/post/ui/PostCard";

const list = [
    { id: 1, title: 'Post 1', content: 'This is the content of post 1.' },
    { id: 2, title: 'Post 2', content: 'This is the content of post 2.' },
    { id: 3, title: 'Post 3', content: 'This is the content of post 3.' },
];

const PostList = () => {
    return (
        <>
            {list.map(post => (
                <PostCard key={post.id} title={post.title} content={post.content} />
            ))}
        </>
    );
}

export default PostList;