import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h1>Not Found</h1>
            <p>Could not find requested resource</p>
            <Link href="/">Go home</Link>
        </div>
    )
}

export default NotFound