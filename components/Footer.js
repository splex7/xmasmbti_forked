import styles from '@styles/Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                ⓒ 2021. &nbsp; <a href={"https://github.com/devyeony"} className={styles.creator} target={"_blank"}>Yeonhee Kim</a> &nbsp; All rights reserved.
            </footer>
        </>
    )
}
