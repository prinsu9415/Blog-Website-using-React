import "./post.css"

export default function () {
  return (
    <div className='post'>
        <img className="postImg"
        src='https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ></img>
        <div className="postInfo">
            <div className="postCats">
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>
                Lorem ipsum dolor sit amet consectetur. 

            </span>
            <hr />
            <span className='postDate'>1 hour ago</span>
            <p className="postDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing 
                elit. Molestias, perferendis minus. Voluptatum, 
                veritatis corrupti ut necessitatibus id iste reiciendis inventore quos ex minus
                 doloremque itaque dolores odio magnam ab quisquam!
            </p>

        </div>
    </div>
  )
}
