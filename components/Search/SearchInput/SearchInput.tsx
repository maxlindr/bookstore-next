import { IconButton, InputAdornment, InputBaseProps, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export type SearchInputProps = InputBaseProps;

export const SearchInput = ({ placeholder = 'Поиск', ...props }: InputBaseProps) => {
  return (
    <OutlinedInput
      {...props}
      type="search"
      placeholder={placeholder}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="Поиск" edge="end" type="submit">
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
      sx={{
        '& .MuiInputBase-input': {
          padding: '8px',
          fontSize: '14px',
        },
      }}
    />
  );
};
