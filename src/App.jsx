
import {Header} from './components/header';
import {MainArticle} from './components/MainArticle';
import { NewContainer } from './components/NewContainer';
import { ArticleContainer } from './components/ArticleContainer';
import './index.css';

function App() {

  return (
    <main className='p-4 m-auto text-inter'>
      <Header />
      <div className='sm:flex sm:gap-8'>
        <MainArticle />
        <NewContainer />
      </div>
      <ArticleContainer />
    </main>
  )
}

export default App
