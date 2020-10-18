import React from 'react';

class Groups extends React.Component{
    constructor()
    {
        super();

        this.state = { groups:
            [
              {name:'Ametal'},
              {name:'Alkali Metal'},
              {name:'Alkali Toprak Metal'},
              {name:'Geçiş Metali'},
              {name:'Metal'},
              {name:'Yarı Metal'},
              {name:'Halojen'},
              {name:'Soygaz'},
              {name:'Lantanit'},
              {name:'Actinide'},
            ]
        };
    
     this.sayGroup = this.sayGroup.bind(this);
    }

    sayGroup(groupName)
    {
        this.props.sayGroup(groupName);
    }

    render(){
        let arrayGroup = [];
        arrayGroup.push(<th className = 'title'><h3><span>Periyodik Tablo</span></h3></th>);
        
        this.state.groups.map(group =>
        {
            arrayGroup.push(
                <div onMouseEnter={() => this.sayGroup(group.name)} onMouseLeave={() => this.sayGroup("")} >
                    <tr className = 'item' >
                        <div className={[group.name.split(' ').join('') , 'elementGroup'].join(' ')}> </div>
                        <div style={{marginLeft: '40px'}}>{group.name}</div>
                    </tr>
                </div>) 
        })

        return(
        <div className = "group">
            <table>     
                {arrayGroup}
            </table>
        </div>
        )
    }
}

export default Groups;