import React, {Component, Fragment} from 'react'
import Item from './Item'
import AddItem from './AddItem'

class List extends Component {
  state = {
    name: 'Supermarket List',
    count: 0,
    items: [],
    showAdd: false
  }

  componentWillMount = () => {
    this.setState({
      count: this.state.items.length
    })
  }

  toggleModal = () => {
    this.setState({
      showAdd: !this.state.showAdd
    })
  }

  addItem = (item) => {
    const items = this.state.items
    items.push(item)
    this.setState({
      items,
      count: this.state.count+1
    })
  }

  handleDelete = (item_to_delete) => {
    const items = this.state.items
    items.map((item, index) => {
      if (item === item_to_delete) items.splice(index, 1)
    })
    this.setState({
      items,
      count: this.state.count-1
    })
  }

  render() {
    const countItems = (items) => (
      items === 1
        ? '1 ITEM'
        : `${items} ITEMS`
    )

    return(
      <Fragment>
        <div className='list_container'>
          <div className='list'>
            <div className='list_header'>
              <h1>{this.state.name}</h1>
              <small>{countItems(this.state.count)}</small>
            </div>
            <div className='items'>
              {this.state.count > 0
                ? this.state.items.map((item, index) => (
                    <Item
                      key={index}
                      label={item}
                      delete_self={this.handleDelete}
                    />
                  ))
                : <h2>List is empty :c</h2>
              }
            </div>
            <button className='add_item_button' onClick={this.toggleModal}>
              Add Item
            </button>
          </div>
        </div>
        <AddItem
          show={this.state.showAdd}
          close={this.toggleModal}
          handleAdd={this.addItem}
        />
      </Fragment>
    )
  }
}

export default List