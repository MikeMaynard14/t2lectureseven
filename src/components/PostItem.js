import React, {useState} from 'react'
import axios from 'axios';
import EditPost from './EditPost';


const PostItem = (props) => {

  return (
    <div>
    
      <div id={props.uniqueId} className='post_item'>
        <div className='postHeader'>
          <h3 className='userPost'>{props.userpost}</h3>
          <h6 className='date'>{props.date}</h6>
        </div>
          <p className="mess">{props.message}</p>
          <div className='postUi'>
            <p className='edit'>Edit Post</p>
            <p className='delete'>Delete Post</p>
          </div>
          
      </div>
      
    </div>
  )
}

export default PostItem
