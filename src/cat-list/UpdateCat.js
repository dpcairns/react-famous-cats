import React, { Component } from 'react'
import request from 'superagent';

export default class CreateCat extends Component {
    state = {
        types: [],
    };

    componentDidMount = async () => {
        const types = await request.get('https://new-cats-db-danny.herokuapp.com/api/types');
        
        console.log(types)
        this.setState({ types: types.body });

        const cat = await request.get(`https://new-cats-db-danny.herokuapp.com/api/cat/${this.props.match.params.id}`);
        
        const catToUpdate = cat.body[0];
        
        this.setState({
            name: catToUpdate.name,
            sidekick: catToUpdate.is_sidekick,
            lives: catToUpdate.lives,
            image: catToUpdate.url,
            type: catToUpdate.type_id,
            years: catToUpdate.year
        });
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

    handleDelete = async () => {
        await request.delete(`https://new-cats-db-danny.herokuapp.com/api/cat/${this.props.match.params.id}`);

        this.props.history.push('/');
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newCat = {
            name: this.state.name,
            is_sidekick: this.state.sidekick,
            lives: this.state.lives,
            url: this.state.image,
            type_id: this.state.type,
            year: this.state.years,
            id: Number(this.props.match.params.id),
        }

        const dbCat = await request.put('https://new-cats-db-danny.herokuapp.com/api/cats', newCat);


        console.log(dbCat)

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Update my cat!
                    <br/>
                    <label>
                        Name: 
                        <input value={ this.state.name } onChange={this.handleNameChange} />
                    </label>
                    <br/>
                    <label>
                        Type: 
                        <select value={ this.state.type } onChange={ this.handleTypeChange }>
                            { this.state.types.map(type => <option value={type.id}> 
                            {type.name}
                            </option>)}
                        </select>
                    </label>
                    <br/>
                    <label>
                        Years: 
                        <input value={ this.state.years } type='number' onChange={this.handleYearsChange} />
                    </label>
                    <br/>
                    <label>
                        Lives: 
                        <input value={ this.state.lives } type='number' onChange={this.handleLivesChange} />
                    </label>
                    <br/>
                    <label>
                        Image: 
                        <input value={ this.state.image } onChange={this.handleImageChange} />
                    </label>
                    <br/>

                    <label>
                        Is a sidekick: 
                        <select value={this.state.sidekick} onChange={this.handleSidekickChange}>
                            <option value="true" >True</option>
                            <option value="false"
                            >False</option>
                        </select>
                    </label>
                    <br />
                <button>Submit</button>
                </form>
    
                <button onClick={ this.handleDelete } 
                style={{ background: 'red', marginTop: 100}}>DELETE</button>

            </div>
        )
    }
}
