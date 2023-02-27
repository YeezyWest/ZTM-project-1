import { useState, useEffect } from 'react';

import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField , setSearchField] = useState('');
  const  [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then( (users) => setMonsters(users) );
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
   });

   setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])
 
  const onSearchChange = (e) => {
        //console.log(e.target.value)
        const searchFieldString = e.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);     
      };

  return(
    <div className="App">
      <h1 className='app-title'>monster Rolodex</h1>
       <SearchBox  onChangeHandler = {onSearchChange}
        placeholder = "search-monster"
        className ="monsters-search-box" />
      <CardList monsters = {filteredMonsters} />
      </div>
  )
}


// class App extends Component {
//   constructor(){
//     super();


//      this.state = {
//       monsters: [],
//       searchField: ''
//      };  
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then( users => 
//       this.setState( 
//       () => {
//           return {monsters: users}
//       },
//       ));
//   }

//   onSearchChange = (e) => {
//     //console.log(e.target.value)
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState( 
//       () => {
//      return {searchField };
//     })

//  }

//   render() {
    
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//    });


//     return (
      
//     );
//   }
// }
export default App;
