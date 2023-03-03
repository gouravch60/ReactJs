
function Header({appTitle}){
    return (   
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
                <a href="#" className="navbar-brand">{appTitle}</a>
        </div>
        <h3>{appTitle}</h3>
    </nav>
    );
}

export default Header;