import type { NextPage } from 'next'
import Image from 'next/image'
import bubbles from '../pages/img/bubbles.png'
import { useRouter } from 'next/router'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const Day001: NextPage = () => {
  const router = useRouter()
  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault()

    router.push(`/`)
  }
  return (
    <div className='body'>
      <span className='circle-top' />
      <span className='circle-bottom' />
      <span className='circle-right-center' />

      <section className='content'>
        <section className='inside-content'>
          <Image
            className='bubble-image'
            src={bubbles}
            alt='Picture of the author'
          />
          <span className='title-moon'>BlueMoon Party</span>
        </section>

        <span className='title-1'>Create Account</span>
        <span className='title-2'>
          Already have an account?
          <span className='bolder'> Sign In</span>
        </span>

        <form onSubmit={handleClick}>
          <section>
            <PermIdentityOutlinedIcon className='user-icon' />
            <input className='user-name' type='text' placeholder='Name' />
          </section>
          <section>
            <EmailOutlinedIcon className='mail-icon' />
            <input
              className='user-email'
              type='email'
              placeholder='Email'
              id=''
            />
          </section>
          <section>
            <LockOutlinedIcon className='passwd-icon' />
            <input
              className='user-passwd'
              type='password'
              placeholder='Password'
              id=''
            />
          </section>

          <button className='button'>Sign Up</button>
        </form>

        <span className='hr1' />
        <span className='social-media-signup'>or sign up with</span>
        <span className='hr2' />

        <svg
          width='40'
          height='40'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='google-icon'
        >
          <path
            d='M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z'
            fill='white'
          />
          <path
            d='M23.8299 16.1818C23.8299 15.6146 23.779 15.0691 23.6845 14.5455H16.1499V17.64H20.4554C20.2699 18.64 19.7063 19.4873 18.859 20.0546V22.0619H21.4445C22.9572 20.6691 23.8299 18.6182 23.8299 16.1818Z'
            fill='#4285F4'
          />
          <path
            d='M16.1496 24C18.3096 24 20.1205 23.2836 21.4442 22.0618L18.8587 20.0545C18.1423 20.5345 17.226 20.8181 16.1496 20.8181C14.066 20.8181 12.3023 19.4109 11.6732 17.52H9.00049V19.5927C10.3169 22.2072 13.0223 24 16.1496 24Z'
            fill='#34A853'
          />
          <path
            d='M11.6735 17.52C11.5135 17.04 11.4226 16.5272 11.4226 16C11.4226 15.4727 11.5135 14.96 11.6735 14.48V12.4072H9.00081C8.45899 13.4872 8.1499 14.709 8.1499 16C8.1499 17.2909 8.45899 18.5127 9.00081 19.5927L11.6735 17.52Z'
            fill='#FBBC05'
          />
          <path
            d='M16.1496 11.1818C17.3241 11.1818 18.3787 11.5855 19.2078 12.3782L21.5023 10.0836C20.1169 8.79273 18.306 8 16.1496 8C13.0223 8 10.3169 9.79273 9.00049 12.4073L11.6732 14.48C12.3023 12.5891 14.066 11.1818 16.1496 11.1818Z'
            fill='#EA4335'
          />
        </svg>

        <svg
          width='40'
          height='40'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='twitter-icon'
        >
          <path
            d='M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z'
            fill='#1DA1F2'
          />
          <path
            d='M24 11C23.4 11.3 22.8 11.4 22.1 11.5C22.8 11.1 23.3 10.5 23.5 9.7C22.9 10.1 22.2 10.3 21.4 10.5C20.8 9.9 19.9 9.5 19 9.5C16.9 9.5 15.3 11.5 15.8 13.5C13.1 13.4 10.7 12.1 9 10.1C8.1 11.6 8.6 13.5 10 14.5C9.5 14.5 9 14.3 8.5 14.1C8.5 15.6 9.6 17 11.1 17.4C10.6 17.5 10.1 17.6 9.6 17.5C10 18.8 11.2 19.8 12.7 19.8C11.5 20.7 9.7 21.2 8 21C9.5 21.9 11.2 22.5 13 22.5C19.1 22.5 22.5 17.4 22.3 12.7C23 12.3 23.6 11.7 24 11Z'
            fill='white'
          />
        </svg>

        <svg
          width='40'
          height='40'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='lkdin-icon'
        >
          <path
            d='M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z'
            fill='#2867B2'
          />
          <path
            d='M11.6 24H8.2V13.3H11.6V24ZM9.9 11.8C8.8 11.8 8 11 8 9.9C8 8.8 8.9 8 9.9 8C11 8 11.8 8.8 11.8 9.9C11.8 11 11 11.8 9.9 11.8ZM24 24H20.6V18.2C20.6 16.5 19.9 16 18.9 16C17.9 16 16.9 16.8 16.9 18.3V24H13.5V13.3H16.7V14.8C17 14.1 18.2 13 19.9 13C21.8 13 23.8 14.1 23.8 17.4V24H24Z'
            fill='white'
          />
        </svg>
      </section>
    </div>
  )
}

export default Day001
