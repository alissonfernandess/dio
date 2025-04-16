import { Button, ButtonProps } from '@mui/material';

export function ButtonModulo(props: ButtonProps) {
  return (
    <Button
      variant="outlined"
      sx={{
        width: 530,
        color: 'white',
        backgroundColor: '#252525',
        boxShadow: 'inset -5px 6px 8px rgba(0, 0, 0, .7)',
      }}
      {...props}
    />
  );
}
