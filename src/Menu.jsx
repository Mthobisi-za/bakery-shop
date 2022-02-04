import './Menu.css'
function App() {
    return (<><div className="menu">
            <div className="menu-tab">
                <div className="left-tab">
                    <div className="empty"></div>
                    <h1 className="title">Bakery Shop</h1>
                </div>
                <div className="right-tab">
                    <div className="empty"></div>
                    <div className="container-links">
                    <a href="#" className="menu-links">Home</a>
                    <a href="#shop" className="menu-links">Shop</a>
                    <a href="https://github.com/Mthobisi-za" className="menu-links">About Me</a>
                    </div>
                </div>
            </div>
        </div>
        </>
        
        
    );
}

export default App;