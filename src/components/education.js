import * as React from "react"

const Edu = (edu) => {
    return (
        <section>
            <strong>{edu.major}</strong>
            <p><strong>{edu.univ}</strong> <i>{edu.year}</i></p>
        </section>
    )
}

export default Edu
