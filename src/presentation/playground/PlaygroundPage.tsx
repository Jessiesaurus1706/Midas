import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import ThemeToggle from '../components/ui/ThemeToggle/ThemeToggle';
import PasswordInput from '../components/ui/PasswordInput';
import Card from '../components/ui/Card';

const PlaygroundPage = () => {
  return (
    <div
      style={{
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        maxWidth: 500,
      }}
    >
      <ThemeToggle />

      <h2>Input</h2>

      <Input
        id="user"
        label="Usuario"
        placeholder="Ingresa tu usuario"
      />

      <Input
        id="email"
        label="Correo"
        placeholder="correo@empresa.com"
        helperText="Debe ser un correo corporativo."
      />

      <Input
        id="error"
        label="Usuario"
        error="El usuario es obligatorio."
      />

      <Input
        id="disabled"
        label="Usuario"
        disabled
        placeholder="Deshabilitado"
      />

      <h2>Buttons</h2>

      <Button>Primary</Button>

      <h2>Password Input</h2>
      <PasswordInput
        id="password"
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
      />

      <h2>Card</h2>
      <Card>
        <h3>Este es un Card de prueba</h3>
        <p>
          Este es un ejemplo de cómo usar el componente Card.
        </p>
      </Card>

    </div>
  );
};

export default PlaygroundPage;