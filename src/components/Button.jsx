import styles from '../styles/button.module.css'

function Button({ text, onClick, className, href }) {
    // Se houver href, renderiza como link
    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${className}`}
            >
                {text}
            </a>
        )
    }

    // Senão, renderiza como botão comum
    return (
        <button onClick={onClick} className={`${styles.button} ${className}`}>
            {text}
        </button>
    )
}

export default Button
