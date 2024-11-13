import { useEffect, useState } from "react" // componente para ser usado toda vez que a tela carrega e componente para guardar variaveis para exibir de forma dinamica 
import api from "../../services/api"
import { useNavigate } from "react-router-dom"

function ListarUsuarios() {

    const navigate = useNavigate()
    const [allUsers, setAllUsers] = useState()

    useEffect(() => {
        try {
        async function loadUsers() {
            const token = localStorage.getItem('token')
            const { data: { users } } = await api.get('/listar', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setAllUsers(users)
        }
        loadUsers()
    } catch(err) {
        alert("Não foi possivel carregar a página")
    }
    }, [])

    function Sair(){
        localStorage.clear()
        navigate('/login')
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border-gray-300 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-600">Listar Usuários</h2>
            <ul className="space-y-2 ">
                {allUsers && allUsers.length > 0 && allUsers.map((user) => (
                    <li key={user.id} className="bg-gray-100 p-4 rounded-md">
                        <p className="font-semibold">Nome: {user.name}</p>
                        <p className="font-semibold"> E-mail: {user.email}</p>
                    </li>
                ))
                }
            </ul>
            <button type="button" className="w-full bg-emerald-900 text-white py-2 px-4 rounded-md hover:border-emerald-400" onClick={Sair}>Sair</button>
        </div>
    )

}

export default ListarUsuarios