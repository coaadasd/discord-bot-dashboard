import styles from '../styles/home.module.css';

const Home = () => {
  return(
    <div className={styles.allContainer}>
      <div className={styles.margin}></div>
      <div className={styles.homeContainer}>
        <div className={styles.welcome}>
          <div className={styles.welcomeContainer}>
            <div className={styles.welcomeTitle}>User님 환영합니다.</div>
            <div className={styles.welcomeText}>봇을 제작하고 편리한 디스코드 이용되세요.</div>
          </div>
          <div className={styles.viewButton}>자세히 보기</div>
        </div>
        <div className={styles.guideContainer}>
            <div className={styles.guideTitle}>Guide</div>
            <div className={styles.guideBox}>
              <div className={styles.guideContents}>
                <div className={styles.guideContentsContainer}>
                  <div className={styles.guideContensTitle}></div>
                  <div className={styles.guideComment}></div>
                </div>
                <div className={styles.goButton}>바로 보러가기</div>
              </div>
              <div className={styles.guideContents}>
                <div className={styles.guideContentsContainer}>
                  <div className={styles.guideContensTitle}></div>
                  <div className={styles.guideComment}></div>
                </div>
                <div className={styles.goButton}>바로 보러가기</div>
              </div>
              <div className={styles.guideContents}>
                <div className={styles.guideContentsContainer}>
                  <div className={styles.guideContensTitle}></div>
                  <div className={styles.guideComment}></div>
                </div>
                <div className={styles.goButton}>바로 보러가기</div>
              </div>
              <div className={styles.guideContents}>
                <div className={styles.guideContentsContainer}>
                  <div className={styles.guideContensTitle}></div>
                  <div className={styles.guideComment}></div>
                </div>
                <div className={styles.goButton}>바로 보러가기</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home;