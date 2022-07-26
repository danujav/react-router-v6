import React, { Component } from 'react'

class Layout extends Component {
    render() {
        return (
            <div>
                {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/customer">Customer</Link>
                        </li>
                        <li>
                            <Link to="/item">Item</Link>
                        </li>
                        <li>
                            <Link to="/nothing-here">Nothing Here</Link>
                        </li>
                    </ul>
                </nav>

                <hr />

                {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
                <Outlet />
            </div>
        );
    }
}

export default Layout;