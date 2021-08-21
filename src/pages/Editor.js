import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import './Editor.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "print('Hello World')", language: 'python' };

        this.handleLanguageChange = this.handleLanguageChange.bind(this);
    }

    handleLanguageChange(e) {

    }

    render() {
        return (
            <div>
                <SyntaxHighlighter language='python' contentEditable>
                    {this.state.value}
                </SyntaxHighlighter>
            </div>
        );
    };
}

export default Editor;