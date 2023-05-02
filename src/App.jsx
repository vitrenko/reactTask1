import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import PostList from './components/PostList/PostList';

function App() {
  const sayHello = () => "Hello";

  return (
    <>
     <Header />
     <PostList />
     <Footer />
    </>
  )
}

export default App
