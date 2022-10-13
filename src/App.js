import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState('general');

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=e1e8e21a7c874b98b80bcddc5e7f5fec`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  return (
    <div className="App">
      <h1 className="title">See The Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}

export default App;
