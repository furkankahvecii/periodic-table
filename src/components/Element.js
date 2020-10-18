import React from 'react';

class Element extends React.Component 
{
    state = {
        hover: false
    };
    
    onMouseEnter = (event) => {
        this.setState({ hover: true });
    };
    
    onMouseLeave = (event) => {
        this.setState({ hover: false });
    };

  render () {
    let { element } = this.props;
    let a = element.bg_color === 'true' ? "bgColor" : element.group_name.split(" ").join("");

    return (
        <div className={`element element-${element.id} ${a}`} 
            onMouseEnter={this.onMouseEnter} 
            onMouseLeave={this.onMouseLeave}>
            {element.id} {element.name_tr} 
        </div>
    );
 }

}

export default Element;