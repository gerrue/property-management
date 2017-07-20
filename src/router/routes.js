import Hello from '@/components/Hello'
import Home from '@/components/Home'

export const HOME = 'Home'
export const HELLO = 'Hello'

export default [
  {
    path: '/',
    name: HOME,
    component: Home,
  },
  {
    path: '/hello',
    name: HELLO,
    component: Hello,
  }
]
