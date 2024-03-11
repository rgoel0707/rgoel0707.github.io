import React from "react";
import ProjectTile from "../components/projectTile";
import './Projects.css';

const projectsData = [
  {
    id: 1,
    name: 'Solar Potential Checker',
    thumbnail: './solarchecker.webp',
    description: 'A web-app that allows user customizations to check solar potential of a house.  Skills used: React, Google Places APIs, Redux Store',
    path: 'https://solarcheck.netlify.app/'
  },
  {
    id: 2,
    name: 'Playlist Creator',
    thumbnail: './spc.webp',
    description: 'Website connected with Spotify APIs to search for songs and add to a new playlist. Skills used: React, Rest APIs',
    path: 'https://manage-spotify.netlify.app/'
  },
  {
    id: 3,
    name: 'Reddit Explorer',
    thumbnail: './reddit-exp.webp',
    description: 'A website that fetches and displays posts from Reddit. Skills used: React, JSON parsing, Redux store',
    path: 'https://bestofreddit.netlify.app/'
  },
  {
    id: 4,
    name: 'Meal Planner',
    thumbnail: './mealsugesstor.webp',
    description: 'A quick tool that gives suggestions for each meal of the day. Skills used: React, JavaScript algos',
    path: 'https://mealplanner07.netlify.app/'
  }
]

export default function Projects() {
  return (
    <div>
      <div className="about-me-bg-1"></div>
      <div className="about-me-bg-2"></div>
      <div className="page-container">
        <p className="page-name">My projects</p>
        <div className="projects-list">
          {projectsData.map(project => (<ProjectTile project={project} />))}
        </div>
      </div>
      <footer>
        <p>&copy; 2024 Rishabh Goel. All rights reserved. V1.1</p>
      </footer>
    </div>
  )
}
