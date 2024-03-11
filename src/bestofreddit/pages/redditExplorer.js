import React, { useEffect, useState } from "react";
import CategorySelector from "../components/categorySelector";
import PostTiles from "../features/postTiles";
import { useDispatch } from "react-redux";
import { addCategory } from "../../Store/categorySlice";
import SearchBar from "../components/searchBar";
import './Bor-app.css';

async function getCats() {
  const responseJSON = await fetch(`https://www.reddit.com/subreddits.json`);
  const data = await responseJSON.json();
  return data;
}

export default function RedditExplorer() {
  const [category, setCategory] = useState('r/Home');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCats = async () => {
      const response = await getCats();
      response.data.children.forEach(cat => {
        const { name, display_name_prefixed } = cat.data;
        dispatch(addCategory({
          id: name,
          name: display_name_prefixed
        }))
      })
    }
    fetchCats();
  }, [dispatch]);

  return (
    <div>
      <div className="about-me-bg-1"></div>
      <div className="about-me-bg-2"></div>
      <div className="page-container">
        <p className='page-name' id='header-text'>Welcome to the World of Reddit!</p>
        <div className="bor-page">
          <div id='nav-div'>
            <CategorySelector onChange={(e) => setCategory(e.target.value)} />
            <SearchBar />
          </div>
          {/*<div className="divider"></div>*/}
          <PostTiles selectedCat={category} />
        </div>
      </div>
      <footer>
        <p>&copy; 2024 Rishabh Goel. All rights reserved. V1.1</p>
      </footer>
    </div>
  )
}
