import styles from '../styles/burgerBar.module.css';
import { FaDiscord } from "react-icons/fa";

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
          <div className={styles.profileName}>Muatex</div>
          <div className={styles.profileNameContainer}>
            <FaDiscord className={styles.profileIcon}/>
            <div className={styles.profileText}>Muatex#0001</div>
          </div>
          <div className={styles.profileNameContainer2}>
            <div className={styles.profileName2}>Muatex</div>
            <div className={styles.profileNameTag}>#0001</div>
          </div>
          <FaDiscord className={styles.profileIcon2}/>
        </div>
      </div>
    </>
  )
}

export default BurgerBar;