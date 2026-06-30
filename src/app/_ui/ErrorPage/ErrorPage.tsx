import { ErrorHeader } from './styled';

interface IProps {
  message: string;
}

export const ErrorPage = ({ message }: IProps) => {
  return <ErrorHeader>{message}</ErrorHeader>;
};
