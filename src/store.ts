import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { blogApi } from 'pages/blog/blog.service'

// components
import blogReducer from 'pages/blog/blog.slice'

export const store = configureStore({
  reducer: {
    posts: blogReducer,
    [blogApi.reducerPath]: blogApi.reducer
  },
  //   them api middleware de enable tinh nang catching,invalidation,polling
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(blogApi.middleware)
  }
})

// setup rtk query
//optional dung tinh nang refetchOnFocus, refetchOnReconnect
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
