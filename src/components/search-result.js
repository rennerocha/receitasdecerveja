import React, { Component } from 'react';
import { Card, Divider, Image } from 'semantic-ui-react'

export default class SearchResult extends Component {
  render() {
    let searchResultContent = ''
    if(this.props.selectedBeerStyle) {
      searchResultContent = (
        <Divider horizontal>{this.props.selectedBeerStyle.text}</Divider>
      )
    }

    return (
      <div className="SearchResult">
        {searchResultContent}
      </div>
    );
  }
}



        // <Card.Group itemsPerRow={4} fluid centered stackable>
        // //   <Card centered>
        // //     <Image src='http://fakeimg.pl/350x100/' />
        // //     <Card.Content>
        // //       <Card.Header>
        // //         Matthew
        // //       </Card.Header>
        // //     <Card.Meta>
        // //     <span className='date'>
        // //       Joined in 2015
        // //     </span>
        // //     </Card.Meta>
        // //     <Card.Description>
        // //       Matthew is a musician living in Nashville.
        // //     </Card.Description>
        // //     </Card.Content>
        // //     <Card.Content extra>
        // //     <a>
        // //       22 Friends
        // //     </a>
        // //     </Card.Content>
        // //   </Card>
        // </Card.Group>
