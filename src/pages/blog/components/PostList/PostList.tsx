// components
import { useGetPostsQuery } from 'pages/blog/blog.service'
import PostItem from '../PostItem'
import { Fragment } from 'react'
import SkeletonPost from '../SkeletonPost'

export default function PostList() {
  const { data, isFetching } = useGetPostsQuery()
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>Được Dev Blog</h2>
          <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
            I never give up. I will do it to the end and succeed
          </p>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
          {isFetching && (
            <Fragment>
              <SkeletonPost />
              <SkeletonPost />
            </Fragment>
          )}
          {!isFetching && data?.map((post) => <PostItem key={post.id} data={post} />)}
        </div>
      </div>
    </div>
  )
}
