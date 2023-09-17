import { useGetPostsQuery } from "./postsAPI"
// import SideNav from "../nav/SideNav"
import ListCard from "../../components/ListCard"
import { Link } from 'react-router-dom'

function Posts() {
    const { data, isLoading, isError} = useGetPostsQuery()

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    return (
        <div className="posts-page">
            {/* <SideNav /> */}
            <div className="posts-container">{data.map(post => <Link key={post._id} to={`posts/${post._id}`}><ListCard  title={post.title}/></Link>)}</div>
        </div>
    )
}

export default Posts