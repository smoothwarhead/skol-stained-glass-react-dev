import React from 'react'
import { sideNav } from '../modules/SideItems'
import { NavLink } from 'react-router-dom'


const SideBar = () => {

    // const { pathname } = useLocation();

  return (
    <>
        <div className="side-bar">
            <div className="side-bar-link">
                {
                    sideNav.map((item) => (
                        <NavLink
                            to={item.to}
                            key={item.name}                           
                            
                            // className={({ isActive }) => {
                            //     console.log(item.to + ' ' + isActive)
                            // }}

                            end
                            
                        >
                            <div className="nav-icon">{item.icon}</div>
                           
                            <p className='nav-items'>                            
                                {item.name}
                            </p>

                        </NavLink>
                    ))
                    
                }

                {/* <ul>
                    <li class="active">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M576 287.6H511.8l1 224.4H64.1V287.6H0V240L288.4 0 576 240v47.6z"/>
                            </svg>
                            <p>
                                Dashboard
                            </p>    
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M490.3 13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2C491.6 223.7 487.6 224 483.4 224C457.4 224 434.2 212.6 418.3 195C402.4 212.6 379.2 224 353.1 224C327 224 303.8 212.6 287.9 195C272 212.6 248.9 224 222.7 224C196.7 224 173.5 212.6 157.6 195C141.7 212.6 118.5 224 92.36 224C88.3 224 84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13H490.3z"/><path class="fa-secondary" d="M80.23 223.2C84.21 223.7 88.3 224 92.36 224C105.1 224 117.2 221.3 128 216.5V384H448V216.5C458.8 221.3 470.8 224 483.4 224C487.6 224 491.6 223.7 495.5 223.2C501.4 222.4 506.9 221 512 219.1V448C512 483.3 483.3 512 448 512H128C92.65 512 64 483.3 64 448V219.1C69.08 221 74.5 222.4 80.24 223.2H80.23z"/>
                            </svg>
                            <p>
                                Products
                            </p>
                        </a>    
                    </li>
                    <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/>
                            </svg>
                            <p>
                                Orders
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M576 224H0V128H576V224z"/>
                                <path class="fa-secondary" d="M512 32C547.3 32 576 60.65 576 96V128H0V96C0 60.65 28.65 32 64 32H512zM576 416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V224H576V416zM112 352C103.2 352 96 359.2 96 368C96 376.8 103.2 384 112 384H176C184.8 384 192 376.8 192 368C192 359.2 184.8 352 176 352H112zM240 384H368C376.8 384 384 376.8 384 368C384 359.2 376.8 352 368 352H240C231.2 352 224 359.2 224 368C224 376.8 231.2 384 240 384z"/>
                            </svg>
                            <p>
                            Transactions
                            </p>
                        </a>
                    </li>
                </ul> */}
            </div>
        </div>
    
    
    </>
  )
}

export default SideBar