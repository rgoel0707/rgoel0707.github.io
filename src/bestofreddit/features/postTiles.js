import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsSelector, addPost, removeAllPosts } from "../../Store/postsSlice";
import CommentSection from "../components/commentSection";


async function getPosts(catName) {
  const responseJSON = await fetch(`https://www.reddit.com/${catName}.json`);
  //const responseJSON = await fetch(`https://www.reddit.com/r/exeter.json`);
  const data = await responseJSON.json();
  return data;
}


export default function PostTiles(props) {
  const [isLoading, setIsLoading] = useState(false);
  const posts = useSelector(postsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    const posts1 = async () => {
      setIsLoading(true);
      const postsData = await getPosts(props.selectedCat);
      setIsLoading(false);
      dispatch(removeAllPosts());
      postsData.data.children.forEach(post => {
        const { id, title, score, thumbnail, url, num_comments } = post.data;
        const imgsrc = thumbnail;
        let type = 'image';
        post.data.preview ? type = 'image' : type = 'url';
        //preview && preview.images && preview.images[0].source.url;
        dispatch(addPost({
          id: id,
          title: title,
          votes: score,
          imgsrc: imgsrc,
          url: url,
          type: type,
          num_comments: num_comments
        }))
      })
    }
    posts1();
  }, [props.selectedCat, dispatch]);


  const handleImgErr = (e) => {
    console.log(e.target);
    let badImg = document.getElementById(e.target.id);
    badImg.src = './default-placeholder.png';

  }

  return (
    <div className="posts">
      {isLoading ? <p className="loading-text">Loading...</p> : Object.values(posts).map(post => {
        return (
          <div key={post.id} className="post-tile">
            <div className="img-div">
              <img src={post.imgsrc} id={post.id} className="post-image" alt='thumbnail' onError={handleImgErr} />
            </div>
            <div className="post-title-div">
              <p className="post-title"><a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a></p>
            </div>
            <div className="url-div">
              {post.type === 'url' && <p className="post-url"><a href={post.url} target="_blank" rel="noopener noreferrer">{post.url}</a></p>}
            </div>
            <div className="votes-div">
              <p className="post-votes">Votes: {post.votes}</p>
            </div>
            <CommentSection post={post} />
          </div>
        )
      })
      }
    </div>
  )
}
