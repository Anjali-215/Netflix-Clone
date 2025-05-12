import { useState } from 'react'
import Navbar from './Components/NavBar/NavBar'
import "./App.css"
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {orginals,action,comedy,horror,romance,documentaries,trending,topRated,upcoming,popular,nowPlaying,tv,search} from './urls'
function App() {

  return (
    <div>
      <Navbar />
      <Banner/>
      <RowPost url={orginals} title="Netflix Originals"/>
      <RowPost title="Action"  url={action}/>
      <RowPost isSmall title="Comedy"  url={comedy}/>
      <RowPost isSmall title="Horror"  url={horror}/>
      <RowPost isSmall title="Romance" url={romance}/>
      <RowPost isSmall title="Documentaries" url={documentaries}/>
      <RowPost isSmall  title="Trending Now"  url={trending} />
      <RowPost isSmall title="Top Rated" url={topRated} />
      <RowPost isSmall  title="Upcoming" url={upcoming} />
      <RowPost isSmall title="Popular" url={popular}/>
      <RowPost isSmall title="Now Playing" url={nowPlaying}/>
      <RowPost isSmall title="TV" url={tv}/>
      <RowPost isSmall title="Search" url={search}/>  
    </div>
  )
}

export default App
