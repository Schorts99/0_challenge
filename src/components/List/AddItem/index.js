import React, {Component} from 'react'

class AddItem extends Component {
  state = {
    name: '',
    valid: false
  }

  handleChange = ({target}) => {
    const name = target.value
    const valid = name !== ''
    this.setState({
      name,
      valid
    })
  }

  handleComplete = () => {
    this.props.handleAdd(this.state.name)
    this.setState({
      name: ''
    }, () => {
      this.props.close()
    })
  }

  render() {
    return this.props.show
      ? <div className='add_item_modal'>
          <div className='add_item_content'>
            <h2>Add Item</h2>
            <input
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div className='add_item_modal_buttons'>
              <button className='cancel_button' onClick={this.props.close}>
                Cancel
              </button>
              <button
                className='add_button'
                onClick={this.handleComplete}
                disabled={!this.state.valid}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      : null
  }
}

export default AddItem