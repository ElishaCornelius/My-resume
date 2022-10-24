const Navbar = () => {
    console.log('Hello from component')
    return (
      <div id="nav">
        <div id="letter" >E</div> 
        <div id="name" >ELISHA CORNELIUS</div>
        
        <table id='navtable'>
            <tr>
                <td><a href="#opening" id='resume'>Resume</a></td>
                <td><a href="#contact" id='contact'>Contact</a></td>
                <td><a href="#coverletter" id='coverletter' >Coverletter</a></td>
            </tr>
        </table>
        
        
      </div>
    )
  }
export default Navbar;