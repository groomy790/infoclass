import { Ping } from "../model/ping"
import { GetPing } from "../service/ping"

import Layout from "../components/layout"

import { useEffect, useState } from "react"

const PingPage = () => {
    const [ pinged, set_pinged ] = useState<Ping>({ message: "" })
    useEffect(() => set_pinged(GetPing()))

    return (
        <Layout>
            <h1>Response of ping is</h1>
            <p>{ pinged.message }</p>
        </Layout>
    )
}

export default PingPage
