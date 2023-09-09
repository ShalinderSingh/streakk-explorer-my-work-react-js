import './App.css';
import BlockDetail from './Components/BlockDetail';
import Blocks from './Components/Blocks';
import Dashboard from './Components/Dashboard';
import ListBlocks from './Components/ListBlocks';
// import SearchBar from './Components/SearchBar';
import TransactionsList from './Components/TransactionsList';
import TxnFromAddressDetail from './Components/TxnFromAddressDetail';
import TxnHashOverview from './Components/TxnHashOverview';
import Even from './Even';
import Header from './Header';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        {/* <SearchBar /> */}
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/blocks' element={<Blocks />} />
          <Route path='/listBlocks/' element={<ListBlocks />} />
          <Route path='/listBlocks/:blockhash' element={<ListBlocks />} />
          {/* <Route path='/listBlocks/:txHash' element={<ListBlocks />} /> */}
          <Route path='/evm/tx' element={<TransactionsList />} />
          <Route path='/testnet/tx' element={<TransactionsList />} />
          <Route path='/transactions' element={<TransactionsList />} />
          <Route path='/blockDetail/:blocknumber' element={<BlockDetail />} />
          <Route path='/blockDetail/:blockhash' element={<BlockDetail />} />
          <Route path='/blockDetail/:txhash' element={<BlockDetail />} />
          <Route path='/blockDetail/:blocknumber/:txhash' element={<BlockDetail />} />

          <Route path='/txnHashOverview/:blockhash' element={<TxnHashOverview />} />
          <Route path='/address/:address' element={<TxnFromAddressDetail />} />
          <Route path='even' element={<Even />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
