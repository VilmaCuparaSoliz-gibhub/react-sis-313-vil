const API_URL = 'https://fuerza-g-grupo-1-2.onrender.com/v3/api-docs'

export async function fetchEntidades() {
  const res = await fetch(`${API_URL}/api/entidades`)
  if (!res.ok) throw new Error('HTTP ' + res.status)
  return res.json()
}

export async function fetchEntidadDetalle(codigo) {
  const res = await fetch(`${API_URL}/entidades/${codigo}`)
  if (!res.ok) throw new Error('HTTP ' + res.status)
  return res.json()
}

export async function saveEntidad(codigo) {
  const res = await fetch(`${API_URL}/entidad/activa`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ codigo_entidad: codigo }),
  })
  if (!res.ok) throw new Error('HTTP ' + res.status)
  return res.json()
}
