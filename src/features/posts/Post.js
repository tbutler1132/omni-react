import { PortableText } from '@portabletext/react'

function Post({ post }) {
  return (
    <div className='post-container'>
        <h1>{post.title}</h1>
        <PortableText key={post._id} value={post.body}/>
    </div>
  )
}

export default Post