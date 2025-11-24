import styles from '../styles/burgerBar.module.css';

const BurgerBar = () => {
  return(
    <>
      <div className={styles.BurgerBar}>
        <div className={styles.burgerIcon}></div>
        <div className={styles.menuContainer}>
          <div className={styles.menu}>
            <div className={styles.menuElements}>
              <div className={styles.menuIcon}></div>
              <div className={styles.menuTitle}>Home</div>
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuElements}>
              <div className={styles.menuIcon}></div>
              <div className={styles.menuTitle}>Template</div>
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuElements}>
              <div className={styles.menuIcon}></div>
              <div className={styles.menuTitle}>Bot setting</div>
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuElements}>
              <div className={styles.menuIcon}></div>
              <div className={styles.menuTitle}>User Management</div>
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuElements}>
              <div className={styles.menuIcon}></div>
              <div className={styles.menuTitle}>Bot status</div>
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuElements}>
              <div className={styles.menuIcon}></div>
              <div className={styles.menuTitle}>Bot Control</div>
            </div>
          </div>
        </div>
        <div className={styles.profileContainer}>
          <div className={styles}></div>
          <div className={styles}></div>
          <div className={styles}></div>
          <div className={styles}></div>
        </div>
      </div>
    </>
  )
}

export default BurgerBar;