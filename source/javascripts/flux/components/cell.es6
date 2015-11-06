var React = require('react')

export default class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {class_name: ''}
  }

  _onClick() {
    console.log('clicked')
    this.setState({class_name: 'clicked'})
  }

  render() {
    return <cell className={this.state.class_name} onClick={this._onClick.bind(this)}/>
  }
}

