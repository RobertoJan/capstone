import React, { Component } from 'react'
import Featured from '../components/Featured/Featured'
import axios from 'axios';
import './Home.scss';
import Comedy from '../components/Comedy/Comedy'
import Others from '../components/Others/Others'
import Romance from '../components/Romance/Romance'
import Shounen from '../components/Shounen/Shounen'
import SliceOfLife from '../components/SliceOfLife/SliceOfLife'

export default class Home extends Component {
    state = {
        animeList: [],
        shounenList: [],
        comedyList: [],
        romanceList: [],
        sliceOfLifeList: [],
        othersList: [],
        moviesList:[],
        featuredList: []
    };

    getData(){
        axios.get("http://localhost:8080/")
            .then(res => {
            const animeList = res.data;
            this.setState ({animeList});
            })
            .catch(() => {console.error('error');
            });

        axios.get("http://localhost:8080/shounen")
            .then(res => {
            const shounenList = res.data;
            this.setState ({shounenList});
            })
            .catch(() => {console.error('error');
            });

        axios.get("http://localhost:8080/romance")
            .then(res => {
            const romanceList = res.data;
            this.setState ({romanceList});
            })
            .catch(() => {console.error('error');
            });

        axios.get("http://localhost:8080/comedy")
            .then(res => {
            const comedyList = res.data;
            this.setState ({comedyList});
            })
            .catch(() => {console.error('error');
            });

        axios.get("http://localhost:8080/sliceOfLife")
            .then(res => {
            const sliceOfLifeList = res.data;
            this.setState ({sliceOfLifeList});
            })
            .catch(() => {console.error('error');
            });

        axios.get("http://localhost:8080/others")
            .then(res => {
            const othersList = res.data;
            this.setState ({othersList});
            })
            .catch(() => {console.error('error');
            });

        axios.get("http://localhost:8080/movies")
            .then(res => {
            const moviesList = res.data;
            this.setState ({moviesList});
            })
            .catch(() => {console.error('error');
            });
        
        axios.get("http://localhost:8080/featured")
            .then(res => {
            const featuredList = res.data;
            this.setState ({featuredList});
            })
            .catch(() => {console.error('error');
            });
    }

    componentDidMount() { 
        this.getData()
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div className="home">
                <div className="home__featured-container">
                    <h2 className="home__label">Recommended</h2>
                    <div className="home__featured">
                        {this.state.featuredList.map(featuredList => <Featured key={featuredList.mal_id} featuredList={featuredList} />)}
                    </div>  
                </div>
                <div className="home__comedy-container">
                    <h2 className="home__label">Comedy</h2>
                    <div className="home__comedy">
                        {this.state.comedyList.map(comedyList => <Comedy key={comedyList.mal_id} comedyList={comedyList} />)}
                    </div>  
                </div>
                <div className="home__romance-container">
                    <h2 className="home__label">Romance</h2>
                    <div className="home__romance">
                        {this.state.romanceList.map(romanceList => <Romance key={romanceList.mal_id} romanceList={romanceList} />)}
                    </div>  
                </div>
                <div className="home__shounen-container">
                    <h2 className="home__label">Shounen</h2>
                    <div className="home__shounen">
                        {this.state.shounenList.map(shounenList => <Shounen key={shounenList.mal_id} shounenList={shounenList} />)}
                    </div>  
                </div>
                <div className="home__sliceOfLife-container">
                    <h2 className="home__label">Slice Of Life</h2>
                    <div className="home__sliceOfLife">
                        {this.state.sliceOfLifeList.map(sliceOfLifeList => <SliceOfLife key={sliceOfLifeList.mal_id} sliceOfLifeList={sliceOfLifeList} />)}
                    </div>  
                </div>
                <div className="home__others-container">
                    <h2 className="home__label">Others</h2>
                    <div className="home__others">
                        {this.state.othersList.map(othersList => <Others key={othersList.mal_id} othersList={othersList} />)}
                    </div>  
                </div>
            </div>
        )
    }
}
