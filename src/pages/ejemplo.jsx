import { useEffect, useState } from 'react'
import {
  fetchEntidades,
  fetchEntidadDetalle,
  saveEntidad,
} from '../components/apis/ejem.jsx'
import '../assets/ejemplo.css'

function Ejemplo() {
  const [entidades, setEntidades] = useState([])
  const [selectedEntidad, setSelectedEntidad] = useState('')
  const [detalle, setDetalle] = useState({ sigla: '', nombre: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    cargarEntidades()
  }, [])

  async function cargarEntidades() {
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const data = await fetchEntidades()
      setEntidades(Array.isArray(data) ? data : [])
    } catch (err) {
      console.error(err)
      setError('Error al cargar las entidades.')
    } finally {
      setLoading(false)
    }
  }

  async function handleEntidadChange(event) {
    const codigo = event.target.value
    setSelectedEntidad(codigo)
    setDetalle({ sigla: '', nombre: '' })
    setError('')
    setMessage('')

    if (!codigo) return

    try {
      const data = await fetchEntidadDetalle(codigo)
      setDetalle({
        sigla: data.sigla || '',
        nombre: data.nombre || data.descripcion || '',
      })
    } catch (err) {
      console.error(err)
      setError('Error al cargar los detalles de la entidad.')
    }
  }

  async function handleGuardar() {
    if (!selectedEntidad) {
      setError('Selecciona una entidad antes de guardar.')
      return
    }

    setError('')
    setMessage('')

    try {
      const data = await saveEntidad(selectedEntidad)
      setMessage(data.mensaje || 'Entidad guardada correctamente.')
    } catch (err) {
      console.error(err)
      setError('Error al guardar la entidad.')
    }
  }

  return (
    <div className="ventana">
      <div className="titulo">Entidades</div>
      <div className="subtitulo">INSTALACION ENTIDAD</div>
      <div className="contenido">
        <div className="fila">
          <label htmlFor="entidad">Entidad:</label>
          <select
            id="entidad"
            value={selectedEntidad}
            onChange={handleEntidadChange}
          >
            <option value="">Seleccione...</option>
            {loading ? (
              <option value="">Cargando...</option>
            ) : (
              entidades.map((ent) => (
                <option key={ent.entidad} value={ent.entidad}>
                  {ent.entidad} - {ent.descripcion} ({ent.sigla})
                </option>
              ))
            )}
          </select>
        </div>
        <div className="fila">
          <label htmlFor="sigla">Sigla:</label>
          <select id="sigla" value={detalle.sigla} disabled>
            <option value="">{detalle.sigla || 'Seleccione una entidad'}</option>
          </select>
        </div>
        <div className="fila">
          <label htmlFor="institucion">Institución:</label>
          <select id="institucion" value={detalle.nombre} disabled>
            <option value="">{detalle.nombre || 'Seleccione una entidad'}</option>
          </select>
        </div>
        <div className="botones">
          <button type="button" onClick={handleGuardar}>
            OK
          </button>
          <button type="button" onClick={() => window.close()}>
            Salir
          </button>
        </div>
        {error && <p style={{ color: 'red', marginTop: '12px' }}>{error}</p>}
        {message && <p style={{ color: 'green', marginTop: '12px' }}>{message}</p>}
      </div>
    </div>
  )
}

export default Ejemplo
