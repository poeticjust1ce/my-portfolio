import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

// icons
import * as Fi from 'react-icons/fi'
import * as Ai from 'react-icons/ai'
import * as Ti from 'react-icons/ti'

const Home = () => {

  const LinksData = [
    {
      icon: <Ai.AiFillGithub size={24}/>,
      username: '@poeticjust1ce',
      url: 'https://github.com/poeticjust1ce'
    },
    {
      icon: <Ai.AiFillYoutube size={24}/>,
      username: 'gelo',
      url: 'https://www.youtube.com/channel/UCik_u7Ec3V08ebbHajJVDqw'
    },
  ]
  
  const animation = () => (
    <TypeAnimation
      sequence={[
        'front-end developer',
        1000,
        'back-end developer', 
        1000,
        'full-stack developer!', 
        3000
      ]}
      repeat={Infinity}
      cursor={true}
      speed={40}
    />
  )

  return (
    <div className='xs:px-[30%] flex flex-col'>
      <div className='px-4 py-[4rem] flex items-center justify-center'>
        <div className='xs:text-3xl text-2xl text-center'>
          <p>Hello! I'm <span className='font-bold text-[#228245] leading-loose'>Gelo</span> and I am a <br/> {animation()}</p>
        </div>
      </div>
      <div className='px-4 my-2'>
        <p className='text-xl font-bold underline-offset-4 underline pb-2'>About me</p>
        <p className='indent-4 pb-2'>Hello, I am Gelo Ramos, a full-stack web developer based in the Philippines(?). I am currently a 2nd year BS in Information Technology student.</p>
        <p className='indent-4'>Whereas having a little amount of experience, I am eager and motivated to pursue a career of becoming a successful web developer. I am always seeking for new opportunities to further expand my knowledge and skills not just in web-developing but, aswell in other aspects that are needed to reach or surpass my clients' expectations.</p>
        <div className='flex justify-center'>
          <Link to='/works' className='transition-all px-4 py-2 my-2 hover:bg-opacity-60 flex items-center bg-[#228245] rounded-md'>My works&nbsp;<Fi.FiChevronRight /></Link>
        </div>
      </div>

      <div className='px-4 my-2 marker:text-[#228245]'>
        <p className='text-xl font-bold underline-offset-4 underline pb-2'>What I Use</p>
        <ul>
          <li className='flex items-center mb-1'><Ti.TiChevronRightOutline color='#228245'/>&nbsp; HTML & CSS</li>
          <li className='flex items-center mb-1'><Ti.TiChevronRightOutline color='#228245'/>&nbsp; JavaScript, PHP, & SQL</li>
          <li className='flex items-center mb-1'><Ti.TiChevronRightOutline color='#228245'/>&nbsp; React.js</li>
          <li className='flex items-center mb-1'><Ti.TiChevronRightOutline color='#228245'/>&nbsp; Next.js</li>
          <li className='flex items-center mb-1'><Ti.TiChevronRightOutline color='#228245'/>&nbsp; Express</li>
          <li className='flex items-center mb-1'><Ti.TiChevronRightOutline color='#228245'/>&nbsp; MongoDB</li>
          <li className='flex items-center mb-1'><Ti.TiChevronRightOutline color='#228245'/>&nbsp; Firebase</li>

        </ul>
      </div>

      <div className='px-4 my-2 marker:text-[#228245]'>
        <p className='text-xl font-bold underline-offset-4 underline pb-2'>What I 💚</p>
        <ul>
          <li className='flex items-center mb-1'><Ti.TiChevronRightOutline color='#228245'/>&nbsp; Web Developing</li>
          <li className='flex items-center mb-1'><Ti.TiChevronRightOutline color='#228245'/>&nbsp; Guitar, Drums and Keyboard</li>
          <li className='flex items-center mb-1'><Ti.TiChevronRightOutline color='#228245'/>&nbsp; Learning Foreign Languages</li>
          <li className='flex items-center mb-1'><Ti.TiChevronRightOutline color='#228245'/>&nbsp; Writing Poems</li>
          <li className='flex items-center mb-1'><Ti.TiChevronRightOutline color='#228245'/>&nbsp; Online Games</li>
        </ul>
      </div>

      <div className='px-4 my-2'>
        <p className='text-xl font-bold underline-offset-4 underline pb-2'>My links</p>
        <div>
          {LinksData.map(el => (
            <a target='none' href={el.url} key={el.username} className='text-[#228245] font-semibold'>
              <span className='transition-all flex hover:text-[green] mb-2'>{el.icon} &nbsp; {el.username}</span> 
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home