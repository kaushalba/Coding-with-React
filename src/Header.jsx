function Header(){

const v1 = "Welcome to build your future";

  return(
    <header>
        <h1>Connect with us to buld your future 44.00</h1>
        <div>
            <ul>
                
                <li><a href = "#">More Information</a></li>
                <li>About Development Team</li>
                <li>Payments</li>

                <li>{v1}</li>
                <li>{v1.toUpperCase()}</li>

                <hr></hr>
              
            </ul>
        </div>
    </header>

  );

}
export default Header