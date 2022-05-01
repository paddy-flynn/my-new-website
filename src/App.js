export default function App() {
    return (
        <div className="h-screen bg-zinc-800">
            <div className="ml-40 pt-10">
                <h1>Patrick Flynn</h1>
                <div className="json-like">
                    <p className="op">&#10100;</p>
                    <p className="data"><span className="key">"me"</span> <span className="sep">:</span> <span className="value">"Patrick Flynn"</span>,
                    </p>
                    <p className="data"><span className="key">"linkedIn"</span> <span className="sep">:</span> <span className="value"><a
                        href="https://www.linkedin.com/in/patrick-flynn-514a1689?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqmM%2BiNBBRJKu1QsXW5UAEQ%3D%3D"
                        title="Patrick Flynn on LinkedIn">"https://www.linkedin.com/in/patrick-flynn"</a></span>,</p>
                    <p className="data"><span className="key">"github"</span> <span className="sep">:</span> <span className="value"><a
                        href="https://github.com/paddy-flynn"
                        title="Patrick Flynn on Github">"https://github.com/paddy-flynn"</a></span></p>
                    <p className="cp">&#10101;</p>
                </div>
            </div>
        </div>
    )
}
