import React, {Suspense} from 'react';
import Element from './Element'

document.title = 'The Periodic Table of Elements';

const URL = 'https://periodic-table-10001.herokuapp.com/api/v1/elements';

const Groups = React.lazy( () =>
    new Promise((resolve, reject) => setTimeout(() => resolve(import("./Groups")), 0))
);
       

class App extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = { elements: []};
    this.sayGroup  = this.sayGroup.bind(this); 
  }

  sayGroup(value)
  {
    let updatedList = [...this.state.elements];

    if(value != '') 
        updatedList.map(element => element.bg_color = element.group_name !== value ? "true" : "false");
    else
        updatedList.map(element =>element.bg_color = "false");

    this.setState({elements:updatedList}); 
  }

  componentDidMount() 
  {
    fetch(URL)
    .then(res => res.json())
    .then((rows) => {
      this.setState({ elements: rows.data});
    })
  }

  render () {
    return (
      <div className="all">
        <div className='table'>
            {this.state.elements.map(element => 
            <Element element={element} />  )}
        </div>
        <div className='table'>
        <Suspense fallback={<div></div>}>
            <Groups sayGroup={this.sayGroup}/>
        </Suspense>      
        </div>
      </div>
    );
 }
}

export default App;