import { Component } from 'react';

//import './employees-add-form.css';
import './employers-add-form.scss';
class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }
    
    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form row mb-3"
                    onSubmit = {this.onSubmit}>
                    <div>
                    <input type="text"
                        className=" new-post-label" 
                        placeholder="Как его зовут?"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
                    </div>
                    <button type="submit"
                        className="btn btn-outline-light btn-lg">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;