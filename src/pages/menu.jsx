function Menu({ onNavigate }) {
  return (
    <div className="ventana">
      <div className="titulo">Menú principal</div>
      <div className="subtitulo">Selecciona una opción</div>
      <div className="contenido">
        <div className="fila" style={{ gap: '10px', flexDirection: 'column', alignItems: 'stretch' }}>
          <button type="button" onClick={() => onNavigate('ejemplo')}>
            Entidades
          </button>
          <button type="button" onClick={() => onNavigate('home')}>
            Página de inicio
          </button>
        </div>
      </div>
    </div>
  )
}

export default Menu
