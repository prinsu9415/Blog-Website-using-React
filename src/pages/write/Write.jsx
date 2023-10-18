import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" 
        src="https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <form className="writeForm">
            <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i class="writeIcon ri-add-circle-line"></i>
            </label>
           
            <input type="file" id="fileInput" style={{display :"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea type="text" placeholder="Write your story...." className="writeInput writeText">

                </textarea>
                
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
