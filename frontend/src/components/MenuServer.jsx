import { useEffect, useState } from "react"
import axios from "axios"
import MenuClient from './MenuClient'

const MenuItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    let mounted = true
    const fetchMenu = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/menu', { withCredentials: true })
        const data = res.data && (res.data.menu || res.data)
        if (mounted) setItems(data)
      } catch (err) {
        console.error('failed fetching menu', err)
      }
    }
    fetchMenu()
    return () => { mounted = false }
  }, [])

  return(
    <div>
      <MenuClient Items={items} />
    </div>
    )
}

export default MenuItems




