import { noop } from '@/utils/noop';
import type { SearchInputProps } from './SearchInput';
import { SearchInput } from './SearchInput';

export interface SearchProps {
  className?: string;
  value: string;
  onSubmit?: (value: string) => void;
  onChange?: (value: string) => void;
}

export const Search = ({
  className,
  value,
  onChange = noop,
  onSubmit = noop,
}: SearchProps) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const input = form['search'] as HTMLInputElement;
    onSubmit(input.value);
  };

  const handleChange: SearchInputProps['onChange'] = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
    >
      <SearchInput
        fullWidth
        name="search"
        autoComplete="off"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};
