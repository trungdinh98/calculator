import React from 'react';

class DisplayComponent extends React.Component {

    render() {
        let {display} = this.props;
        console.log(this.props);
        return (
            <div className="display">
                <p>{display}</p>
            </div>
    )
        ;
    }
}

export default DisplayComponent;
