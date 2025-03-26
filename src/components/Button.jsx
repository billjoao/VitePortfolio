import styles from '../styles/button.module.css'

function Button ({text, onClick}) {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button