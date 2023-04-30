import styles from './Search.module.scss';
import { SearchInputProps, SearchInput } from './SearchInput';
import { noop } from '@/utils/noop';

export interface SearchProps {
  className?: string;
  onSubmit?: (value: string) => void;
  onChange?: SearchInputProps['onChange'];
}

export const Search = ({ className, onChange = noop, onSubmit = noop }: SearchProps) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const input = form['search'] as HTMLInputElement;
    onSubmit && onSubmit(input.value);
  };

  const handleChange: SearchInputProps['onChange'] = (evt) => {
    onChange(evt);
    const value = evt.target.value;
    if (!value) onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <SearchInput className={styles.input} name="search" autoComplete="off" onChange={handleChange} />
    </form>
  );
};
