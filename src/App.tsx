import './App.scss'

import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header/header';
import Form from './components/Forms/form';
import CardList from './components/CardList/cardList';
import Legend from './components/Legend/legend';
import Footer from './components/Footer/footer';



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Header/>
        <Form/>
        <Legend/>
        <CardList/>
        <Footer/>
      </div>
    </QueryClientProvider>
  )
}

export default App
