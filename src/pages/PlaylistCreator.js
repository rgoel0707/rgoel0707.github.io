import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Spc.css';
import { spotify_client_id } from '../APIkeys';


/*const getAccessToken = async () => {
  const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
  // header paremeter
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    }
  }
  // request body parameter
  const data = {
    grant_type: 'client_credentials',
    client_id: spotify_client_id,
    client_secret: spotify_client_secret,
  }

  const response = await axios.post(TOKEN_ENDPOINT, data, config)
  return response.data.access_token;
};

const accessToken = await getAccessToken();*/

function PlaylistCreator() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const loginFlow = () => {
    const clientId = spotify_client_id;
    const redirectUri = 'http://localhost:3000/';
    const scopes = ['user-read-private', 'user-read-email'];
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const redirectUrl = encodeURIComponent(redirectUri);
    const scope = encodeURIComponent(scopes.join(' '));
    const url = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=token`;
    window.location = url;
  }

  const getAccessTokenFromUrl = () => {
    const hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});

    if (hash.access_token) {
      setAccessToken(hash.access_token);
    }
  };

  useEffect(() => {
    getAccessTokenFromUrl();
  }, []);

  // Function to search for songs
  const searchSongs = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    }
    try {
      const response = await axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, config);
      setSearchResults(response.data.tracks.items);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  // Function to add a song to the selected list
  const addSongToList = (song) => {
    setSelectedSongs([...selectedSongs, song]);
  };

  const removeSongFromList = (songid) => {
    setSelectedSongs(prev => prev.filter(t => t.id !== songid));
  };

  const savetoplaylist = (e) => {
    document.getElementById('saveBtn').innerText = 'Saved';
  }

  return (
    <div>
      <div className="about-me-bg-1"></div>
      <div className="about-me-bg-2"></div>
      <div className='page-container'>
        <p className='page-name'>Spotify Playlist Selector</p>
        <div className='spc-page'>
          <div className='spc-page-div'>
            <button onClick={loginFlow} className='spc-button'>Login to Spotify</button>
            <div className='top-div'>
              <div className='next-div'>
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Enter search term' className='text-entry' id='song-searchbar' />
                <button onClick={searchSongs} className='spc-button'>Search</button>
              </div>
              <div className='lvl-2-div'>
                <p className='spc-header'>Top Matches</p>
                {searchResults.map((song) => (
                  <div className='song-div' key={song.id}>
                    <div className='song-details'>
                      <p className='song-name' >{song.name}</p>
                      <p className='artist'> by {song.artists[0].name}</p>
                    </div>
                    <button className='add-btn' onClick={() => addSongToList(song)}>+</button>
                  </div>
                ))}
              </div>
            </div>
            <div className='top-div'>
              <div className='next-div'>
                <input type='text' value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} name='playlist_name' placeholder='Playlist name' className='text-entry' id='playlist-name' />
                <button id='saveBtn' className='spc-button' onClick={savetoplaylist}>Create Playlist</button>
                <div className='lvl-2-div'>
                  <p className='spc-header'>Selected songs</p>
                  {selectedSongs.map((song) => (
                    <div className='song-div' key={song.id}>
                      <div className='song-details'>
                        <p className='song-name' >{song.name}</p>
                        <p className='artist'> by {song.artists[0].name}</p>
                      </div>
                      <button className='add-btn' onClick={() => removeSongFromList(song.id)}>-</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 Rishabh Goel. All rights reserved. V1.1</p>
      </footer>
    </div>
  );
}

export default PlaylistCreator;
