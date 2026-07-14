import { useEffect, useState } from 'react';
import OrderForm from '../Form/Form';
import Product from '../Product/Product';

import axios from 'axios';
import ArticleList from '../ArticleList/ArticleList';
import type { Article } from '../../types/article';
import { Audio } from 'react-loader-spinner';
import ProductListComp from '../ProductLIstComp/ProductListComp';
import { products } from '../ProductLIstComp/products';
import FormProduct from '../FormProduct/FormProduct';

interface ArticlesHttpResponse {
  hits: Article[];
}

export default function App() {
  //////////////////////////////////////////////////////////////////////////
  const [person, setPerson] = useState(null);

  useEffect(() => {
    console.log('Effect ran!');
    axios
      .get('https://swapi.info/api/people/1')
      .then(response => setPerson(response.data));
  }, []);

  console.log('App rendred!');

  /////////////////////////////////////////////////////////////////////////////////////

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState(products);
  const handleSearch = async (topic: string) => {
    setIsLoading(true);

    const response = await axios.get<ArticlesHttpResponse>(
      `https://hn.algolia.com/api/v1/search?query=${topic}`
    );

    setIsLoading(false);
    setArticles(response.data.hits);
  };

  const handleSubmit = (productName: string) => {
    const newProduct = {
      id: Date.now(),
      name: productName,
    };

    setProductList(prev => [...prev, newProduct]);
  };

  return (
    <>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <ProductListComp items={productList} />

      <FormProduct onSubmit={handleSubmit} />
      <OrderForm onSubmit={handleSearch} />
      {isLoading && <p>Завантаження даних, будь ласка, зачекайте...</p>}

      {articles.length > 0 && <ArticleList items={articles} />}

      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
    </>
  );
}
