import React, {useState, useEffect} from 'react';
import './App.css';
import avatar from './static/avatar.jpg';
import Header from './components/Header';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import Filters from './components/Filters';
import Products from './components/Products';

import { dataLoad }from './apis/data';

function App() {
  const [totalPages, setTotalPages] = useState(0);
  const [user, setUser] = useState({
    avatar,
    name: 'Hoài Lâm',
    points: 1250,
  });
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [productsPage, setProductsPage] = useState();
  useEffect(() => {
    dataLoad()
      .then((res) => {
        const total = Math.ceil(res.length/20);
        if (total > 5) setPagination([1, 2, '...', total - 1, total])
        else {
          let i = 1;
          let tmp = [];
          while (i <= total) {
            tmp = [...tmp, i];
            i += 1;
          }
          setPagination(tmp)
        }
        setData(res);
        setTotalPages(total);
        setProductsPage(res.slice((page - 1) * 20, page * 20));
      })
      .catch((e) => {
        console.log(e);
      });
  }, [])
  return (
    <div className="App">
      <Header user={user}></Header>
      <Tabs />
      <Filters amount={data.length} />
      <Products
        products={data}
        totalPages={totalPages}
        pagination={pagination}
        setPagination={setPagination}
        page={page}
        setPage={setPage}
        productsPage={productsPage}
        setProductsPage={setProductsPage}
      />
      <Footer user={user}></Footer>
    </div>
  );
}

export default App;
