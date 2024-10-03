import './App.css';
import { Nav,Hero,Services,Customer,Footer,NewsLetter,PopularProduct,SuperQuality,SpecialOffer } from './sections';

function App() {
  return (
    <div className="App">
<Nav />
<main className='px-5'>
<Hero />
<PopularProduct />
<SuperQuality />
<Services />
<SpecialOffer />

<NewsLetter />
</main>
<Customer />
<Footer />
    </div>
  );
}

export default App;
