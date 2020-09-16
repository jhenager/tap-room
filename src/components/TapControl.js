import React from 'react';
import TapList from './TapList';
import NewTapForm from './NewTapForm';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: [],
      selectedPost: null, 
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleEditClick = () => {
    this.setState({editing: true});
  }


  handleAddingNewTapToList = (newTap) => {
    const newMasterTapList = this.state.masterTapList.concat(newTap);
    this.setState({
      masterTapList: newMasterTapList,
      formVisibleOnPage: false
    });
  }

  handleDecreasingPintCount = (id) => {
    const selectedPost = this.state.masterPostList.filter(
      (post) => post.id === id
    )[0];
    
    this.setState({ selectedPost: selectedPost });
  };

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList} />
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <TapList tapList={this.state.masterTapList} tapDecrement={this.handleDecreasingPintCount}/>;
      buttonText = "Add Tap"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TapControl;