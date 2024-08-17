import { Ping } from "../model/ping"

export function GetPing(): Ping {
    return { message: "Pong!" }
}
