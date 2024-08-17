import { JSX } from "react"

interface LayoutProps {
    children: JSX.Element | Array<JSX.Element>
}

const Layout = ({ children }: LayoutProps) => (
    <div>
        <h1>This is Layout</h1>
        { children }
    </div>
)

export default Layout
