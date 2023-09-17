import { PortableText } from '@portabletext/react'
import { useParams } from 'react-router-dom'
import { useGetPostQuery } from './postsAPI'

function Post() {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetPostQuery(id)

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>error</div>
  return (
    <div className='post-container'>
        <h1>{data[0].title}</h1>
        <PortableText key={data[0]._id} value={data[0].body}/>
    </div>
  )
}

export default Post