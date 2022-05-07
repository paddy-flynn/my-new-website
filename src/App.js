export default function App() {
    return (
        <div
            className="max-w-md mx-auto bg-zinc-800 text-xs text-neutral-300 shadow-md overflow-hidden md:max-w-full min-h-screen">
            <div className="md:flex flex-col">
                <div>
                    <h1 data-testid="my-name" className="pl-8 text-2xl mb-8">Patrick Flynn</h1>
                </div>
                <div className="pl-8">
                    <div className="block mb-2">
                        <p>&#10100;</p>
                        <p className="pl-6"><span className="text-cyan-400 w-100 md:text-base">"me"</span>
                            <span>:</span> <span className="text-amber-500 md:text-base">"Patrick Flynn"</span>,
                        </p>
                        <p className="pl-6"><span className="text-cyan-400 w-100 md:text-base">"linkedIn"</span>
                            <span>:</span> <span className="text-amber-500 md:text-base">
                            <a className="no-underline"
                               data-testid="linkedin-link"
                               href="https://www.linkedin.com/in/patrick-flynn-514a1689"
                               title="Patrick Flynn on LinkedIn">"https://www.linkedin.com/in/patrick-flynn"</a>
                    </span>,
                        </p>
                        <p className="pl-6"><span className="text-cyan-400 w-100 md:text-base">"github"</span>
                            <span>:</span> <span className="text-amber-500 md:text-base">
                            <a className="no-underline"
                               data-testid="github-link"
                               href="https://github.com/paddy-flynn"
                               title="Patrick Flynn on Github">"https://github.com/paddy-flynn"</a>
                    </span>
                        </p>
                        <p>&#10101;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
