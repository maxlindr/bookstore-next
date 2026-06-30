import { TextResource } from '@/constants';
import { shiftHeadingLevels } from '@/utils/shiftHeadingLevels';
import styles from './BookDescription.module.scss';

const shiftBookDescriptionHeadingLevels = (html: string) => shiftHeadingLevels(html, 3);

interface IProps {
  className?: string;
  html: string;
}

export const BookDescription = ({
  className,
  html,
}: IProps) => {
  return (
    <div className={className}>
      <h2 className="visually-hidden">{TextResource.BookDescriptionTitle}</h2>
      {/* Обойдемся без санитайзера, содержимое БД гарантированно безопасное */}
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: shiftBookDescriptionHeadingLevels(html) }}
      />
    </div>
  );
};
