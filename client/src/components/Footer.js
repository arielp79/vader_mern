const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2026 Herrería Vader - Soluciones en Hierro</p>
                <a
                    href="https://wa.me/542995347581"
                    className="btn-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="btn-whatsapp-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                    />
                    WhatsApp
                </a>
            </div>
        </footer>
    );
};

export default Footer;