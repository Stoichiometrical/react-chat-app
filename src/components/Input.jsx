import "../styles.scss"

export default function Input(){
    return(
        <div className="input">
          <input type="text" placeholder="Type something"/>
           <div className="send">
               <img src="img/attach.png" alt="Missing"/>
               <input  type="file" id="file" />
               <label htmlFor="file">
                   <img src="img/picture.png" alt ="Missing"/>
               </label>
               <button>Send</button>

           </div>



        </div>
    )
}