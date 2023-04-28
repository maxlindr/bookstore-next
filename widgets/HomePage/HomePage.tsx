import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <>
      <h1 className={styles.title}>
        Книги <br />
        по&nbsp;графическому дизайну и&nbsp;типографике
      </h1>
      <p className={styles.subhead}>Распродажа личной коллекции</p>
    </>
  );
};
