import { useGetPostsQuery } from "./postsAPI"
import SideNav from "../nav/SideNav"
import Post from "./Post"

function Posts() {
    const { data, isLoading, isError} = useGetPostsQuery()
    console.log(data, 'data')
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    return (
        <div className="posts-page">
            <SideNav />
            <div className="posts-container">{data.map(post => <Post key={post._id} post={post}/>)}</div>
        </div>
    )
}

export default Posts