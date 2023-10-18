import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWraper">
            <img className="singlePostImg"
            src="https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></img>
        <h1 className="singlePostTitle"> 
        Lorem ipsum dolor sit amet consectetur .
        
        <div className="singlePostEdit">
        <i className="singlePostIcon ri-pencil-line"></i>
        <i className="singlePostIcon ri-delete-bin-line"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
           <span className="singlePostAurthor">
            Aurthor: <b>Prince</b></span> 
            <span className="singlePostDate">
                1 hour ago
            </span>
            </div>
            <p className="singlePostDesc">
              Lorem ipsum, dolor sit amet consectetur adipisicing
               elit. Natus sed aliquam possimus nemo repudiandae
                doloribus eaque! Iusto, dicta est sed excepturi, 
              esse eum asperiores ut ex vel cupiditate unde veritatis.
              Lorem ipsum, dolor sit amet consectetur adipisicing
               elit. Natus sed aliquam possimus nemo repudiandae
                doloribus eaque! Iusto, dicta est sed excepturi, 
              esse eum asperiores ut ex vel cupiditate unde veritatis. 
              Lorem ipsum, dolor sit amet consectetur adipisicing
               elit. Natus sed aliquam possimus nemo repudiandae
                doloribus eaque! Iusto, dicta est sed excepturi, 
              esse eum asperiores ut ex vel cupiditate unde veritatis.
              Lorem ipsum, dolor sit amet consectetur adipisicing
               elit. Natus sed aliquam possimus nemo repudiandae
                doloribus eaque! Iusto, dicta est sed excepturi, 
              esse eum asperiores ut ex vel cupiditate unde veritatis.    
            </p>
        

            </div>
    </div>
  )
}
