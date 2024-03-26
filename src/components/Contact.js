import React from 'react'

const Contact = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold mb-6 md:mx-2 md:text-left text-center">Contact Me</h1>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg mb-4">
                    Feel free to reach out to me through the following channels:
                </p>

                <div className="flex items-center mb-4">
                    <span className="mr-2">📧 Email:</span>
                    <a href="dimitrioskimpaslis@gmail.com" className="text-blue-500">
                        dimitrioskimpaslis@gmail.com
                    </a>
                </div>

                <p className="text-lg mb-4">
                    For more information about MBTI, check out CS Joseph's site and YouTube channel:
                </p>

                <div className="flex items-center">
                    <span className="mr-2">🌐 CS Joseph Site:</span>
                    <a
                        href="https://csjoseph.life/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                    >
                        csjoseph.life
                    </a>
                </div>
                <div className="flex items-center">
                    <span className="mr-2">📺 CS Joseph YouTube:</span>
                    <a
                        href="https://www.youtube.com/@CSJoseph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                    >
                        CSJoseph YouTube
                    </a>
                </div>
            </div>

            {/* Other decorative elements or information can be added here */}
        </div>
    )
}

export default Contact