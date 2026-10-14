
import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard/AlumnoCard';
import Contador from './components/Contador/Contador';

function App() {
  return (
    <>
      {/* 1. Insertamos el Navbar en la parte superior */}
      <Navbar />

      {/* 2. Contenedor principal de la página */}
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>

        <div className="row">
          {/* 3. Reutilizamos el componente AlumnoCard pasándole Props diferentes */}

          <AlumnoCard
            nombre="Daniel Puccio"
            carrera="Desarrollo de Software"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Maria Perez"
            carrera="Diseño Gráfico"
            estadoInicial="Inactivo"
          />

          <AlumnoCard
            nombre="Carlos Mendoza"
            carrera="Administración Industrial"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Luis Ramirez"
            carrera="Mecatrónica Industrial"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Ana Torres"
            carrera="Ingeniería de Software"
            estadoInicial="Inactivo"
          />

          <AlumnoCard
            nombre="Pedro Sanchez"
            carrera="Mecánica Automotriz"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Lucia Fernandez"
            carrera="Redes y Seguridad Informática"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Jorge Castillo"
            carrera="Electricidad Industrial"
            estadoInicial="Inactivo"
          />

          <AlumnoCard
            nombre="Sofia Vargas"
            carrera="Diseño y Desarrollo Web"
            estadoInicial="Matriculado"
          />
        </div>

        <Contador
        
        />

      </div>
    </>
  );
}

export default App;
