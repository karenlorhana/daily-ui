import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Day002: NextPage = () => {
  return (
    <div>
      <div className='side-content'>
        <h1>DETALHES DO PAGAMENTO</h1>

        <form className='form-content'>
          <section>
            <span className='spn-1'>NOME DO TITULAR</span>
            <input
              type='text'
              placeholder='MARIA F DA SILVA'
              className='name-input'
            />
          </section>
          <section>
            <span className='spn-2'>NÚMERO DO CARTÃO</span>
            <input
              type='text'
              placeholder='0000 0000 0000 0000'
              className='number-input'
            />
          </section>

          <section>
            <span className='spn-3'>DATA DE VALIDADE</span>
            <input type='text' placeholder='00/00' className='date-input' />
          </section>

          <section>
            <span className='spn-4'>CVC</span>
            <input type='password' placeholder='000' className='cvc-input' />
          </section>

          <button className='button-pag'>CONFIRMAR PAGAMENTO</button>
        </form>
      </div>

      <svg
        width='1440'
        height='324'
        viewBox='0 0 1440 324'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='green-wave'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 324L60 270C120 216 240 108 360 84C480 60 600 120 720 144C840 168 960 156 1080 126C1200 96 1320 48 1380 24L1440 0V324H1380C1320 324 1200 324 1080 324C960 324 840 324 720 324C600 324 480 324 360 324C240 324 120 324 60 324H0Z'
          fill='#52B946'
          fillOpacity='0.6'
        />
      </svg>
    </div>
  )
}

export default Day002
