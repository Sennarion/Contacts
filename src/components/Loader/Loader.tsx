import { Backdrop, CircularProgress } from '@mui/material';

const Loader: React.FC = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress />
    </Backdrop>
  );
};

export default Loader;
