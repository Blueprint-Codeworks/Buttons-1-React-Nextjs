import { FaTwitter, FaGithub, FaInstagram, FaTiktok, FaFacebookF, FaYoutube } from 'react-icons/fa';

const SocialSection = () => {
    return (
        <div className="social-section">
            <h1 className="blueprint-title text-3xl font-bold text-center mb-4">Blueprint Codeworks</h1>
            <p className="social-text text-center text-gray-600 mb-6">Síguenos en nuestras redes sociales</p>
            <div className="social-icons flex justify-center space-x-6">
                <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-110">
                    <FaTwitter className="icon w-8 h-8 text-blue-500" />
                </a>
                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-110">
                    <FaGithub className="icon w-8 h-8 text-gray-900" />
                </a>
                <a href="https://www.instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-110">
                    <FaInstagram className="icon w-8 h-8 text-pink-500" />
                </a>
                <a href="https://www.tiktok.com/@tu-usuario" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-110">
                    <FaTiktok className="icon w-8 h-8 text-black" />
                </a>
                <a href="https://www.facebook.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-110">
                    <FaFacebookF className="icon w-8 h-8 text-blue-600" />
                </a>
                <a href="https://www.youtube.com/c/tu-usuario" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-110">
                    <FaYoutube className="icon w-8 h-8 text-red-600" />
                </a>
            </div>
        </div>
    );
};

export default SocialSection;
