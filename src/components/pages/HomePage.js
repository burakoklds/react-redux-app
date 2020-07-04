import React, { Component } from 'react';
import ActorList from '../ActorList'

 class HomePage extends Component {
    state = {
        actors:[{
            name:"Hitman",
            description:"Hitman, IO Interactive tarafından geliştirilen bir video oyunu serisi. Bilgisayar dışında birçok farklı platform üzerinde yer almaktadır.",
            photo:"https://cdn.allyouplay.com/content/products/hitman-absolution.jpeg"
        },
        {
            name:"MaxPayne",
            description:"Max Payne önceleri Remedy Entertainment geliştirilmiş ancak son zamanlarda Rockstar Vancouver şirketinin sahiplendiği bir video oyunu serisidir. Serinin adı New York şehrinde polis memuru olan Max Payne'den gelmektedir.",
            photo:"https://upload.wikimedia.org/wikipedia/tr/8/89/Maxpayne.jpg"
        }
    ]
    };

    render() {
        return (
            <div>
                <ActorList actors={ this.state.actors } />
            </div>
        )
    }
}

export default HomePage;