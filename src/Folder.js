import React from 'react';

class Folder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visibility: "visible", isClicked: false, count: 1 }
    }
    onVisibility = () => {
        if (this.state.count % 2 === 1) {
            this.setState({ visibility: "hidden" });
        } else {
            this.setState({ visibility: "visible" });
        }
        this.setState({ count: this.state.count += 1 })
    }
    render() {
        return (
            <div>
                <div style={{ visibility: this.state.visibility }}>
                    <h1>{this.props.folderName}</h1>
                    <ul>
                        <li>{this.props.file1}</li>
                        <li>{this.props.file2}</li>
                        <li>{this.props.file3}</li>
                    </ul>
                </div>
                <button type="button" onClick={this.onVisibility}>Toggle</button>
            </div>
        )
    }
}
export default Folder;