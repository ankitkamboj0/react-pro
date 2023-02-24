import SearchBar from "components/Header/Search"
const Header = ()=>{
    return(
        <div className="flex space-between header">
            <div className="logo">
                <img src="https://img.freepik.com/free-vector/www-icon_23-2147934922.jpg?size=338&ext=jpg" />
            </div>
            <SearchBar />
            <ul className="listUnstyle flex grid-gap-5">
                <li>Home</li>
                <li>Home 1</li>
                <li>Home 2</li>
            </ul>        
        </div>
    )
}

export default Header