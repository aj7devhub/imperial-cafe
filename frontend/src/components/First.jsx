import Intro from './Intro'
import Navbar from './Navbar'

const First = () => {
  return (
    <div className="bg-[url('assets/coffee-bg.jpg')] bg-cover bg-center min-h-screen bg-fixed px-2 pb-12 pt-6 lg:px-6">
      <Navbar/>
      <Intro/>
    </div>
  )
}

export default First