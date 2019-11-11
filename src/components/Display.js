import React from 'react';

class Display extends React.Component {

    render() {
        let {display} = this.props;
        return (
            <div className="display">
                <p>{display}</p>
            </div>
        );
    }
}

export default Display;
