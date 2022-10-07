import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name:'John S.', salary: 800, increase: false, rise: true, id:1},
                {name:'Alex M.', salary: 3000, increase: true, rise: false, id:2},
                {name:'Carl W.', salary: 5000, increase: false, rise: false, id:3}
            ]
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data})=>{
            return {
                data: data.filter(item => item.id !== id )
            }
        })
    }
    
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     // const index = data.findIndex(elem => elem.id === id);

        //     // const old = data[index];
        //     // const newItem = {...old, increase: !old.increase}; //сформирует новый объект //свойства добавленные после заменят существующие/добавятся если новые 
        //     // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     // return {
        //     //     data: newArr
        //     // }


        // }) 1й метод

        this.setState(({data}) =>({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
        
    }

    onToggleRise = (id) => {
        console.log(`rise this ${id}`)
    }


    render() {
        return(
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployersList
                data={this.state.data}
                onDelete={this.deleteItem} 
                onToggleIncrease = {this.onToggleIncrease}
                onToggleRise = {this.onToggleRise}/>
            <EmployersAddForm onAdd={this.addItem}/>
        </div>
        );
    };
}

export default App;