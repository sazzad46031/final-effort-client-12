

const Teacher = () => {
    return (
        <div className="mt-20">
            <div className="text-8xl text-center mb-20">Our Teachers</div>
            <div className="flex gap-20 items-center bg-purple-300">
                <div>
                    <img className="h-[800px]" src="teacher.jpg" alt="" />
                </div>
                <div>
                    <p className="text-7xl font-semibold mb-6"><span>Glen maxwell</span></p>
                    <p className="text-7xl font-light mb-6">Senior web instructor</p>
                    <p className="text-3xl mb-6">Teaching html, css, javascript, react, nodejs, expressjs, mongodb</p>
                    <button className="btn btn-accent">Start teaching today</button>
                </div>
            </div>
        </div>
    );
};

export default Teacher;