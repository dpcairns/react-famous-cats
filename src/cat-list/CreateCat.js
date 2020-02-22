import React, { Component } from 'react'
import request from 'superagent';

export default class CreateCat extends Component {
    state = {
        types: [],
        sidekick: true,
        type: 1,
    };

    componentDidMount = async () => {
        const types = await request.get('https://new-cats-db-danny.herokuapp.com/api/types');
        
        this.setState({ types: types.body });
    }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleTypeChange = (e) => {
        console.log(e.target.value)
        this.setState({ type: Number(e.target.value) })
    }

    handleYearsChange = (e) => {
        this.setState({ years: Number(e.target.value) })
    }

    handleLivesChange = (e) => {
        this.setState({ lives: Number(e.target.value) })
    }

    handleSidekickChange = (e) => {
        const actualBool = e.target.value === 'false' 
            ? false 
            : true

        this.setState({ sidekick: actualBool })
    }

    handleImageChange = (e) => {
        this.setState({ image: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newCat = {
            name: this.state.name,
            isSidekick: this.state.sidekick,
            lives: this.state.lives,
            url: this.state.image,
            typeId: this.state.type,
            year: this.state.years
        }

        const dbCat = await request.post('https://new-cats-db-danny.herokuapp.com/api/cats', newCat);


        console.log(dbCat)

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Make me a cat!
                    <br/>
                    <label>
                        Name: 
                        <input onChange={this.handleNameChange} />
                    </label>
                    <br/>
                    <label>
                        Type: 
                        <select onChange={ this.handleTypeChange }>
                            { this.state.types.map(type => <option value={type.id}> 
                            {type.name}
                            </option>)}
                        </select>
                    </label>
                    <br/>
                    <label>
                        Years: 
                        <input type='number' onChange={this.handleYearsChange} />
                    </label>
                    <br/>
                    <label>
                        Lives: 
                        <input type='number' onChange={this.handleLivesChange} />
                    </label>
                    <br/>
                    <label>
                        Image: 
                        <input onChange={this.handleImageChange} />
                    </label>
                    <br/>

                    <label>
                        Is a sidekick: 
                        <select onChange={this.handleSidekickChange}>
                            <option value="true" >True</option>
                            <option value="false" >False</option>
                        </select>
                    </label>
                    <br />
                <button>Submit</button>
                </form>
            </div>
        )
    }
}
