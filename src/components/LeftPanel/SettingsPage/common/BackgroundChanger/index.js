import React from 'react'


export default class BackgroundChanger extends React.Component {

    onChange (e) {
        this.props.onChange({value: e.target.value, pathConfig: this.props.pathConfig});
    }

    render () {
        return <div>
            Background:
            <input
                value={this.props.data}
                onChange={this.onChange.bind(this)}
            />
        </div>
    }
};
