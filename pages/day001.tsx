import type { NextPage } from 'next'
import Image from 'next/image'
import bubbles from '../pages/img/bubbles.png'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const About: NextPage = () => {
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

        <form>
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
        </form>
      </section>
    </div>
  )
}

export default About
