import { useRef } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import api from "../../services/api"

function Login() {
    
    const emailRef = useRef() // referencia para o input email
    const passwordRef = useRef() // referencia para o input password
    const navigate = useNavigate() // auxilia nas navegações de páginas

    async function handleSubmit(event) {
        event.preventDefault() // impede que a página recarregue

        try {
           const { data:token } = await api.post('/login', { // quando eu declaro uma variavel e uso essa estrutura de variavel:apelido eu posso colocar um apelido nela e chamar por esse apelido
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            
            localStorage.setItem('token', token)
            // console.log(token)
            navigate('/listar-usuarios')

            // alert('Acesso Permitido')
        } catch (err) {
            alert('E-mail ou senha inválido')
        }

    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus: outline-none" />
                <input ref={passwordRef} type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-md focus: outline-none" />
                <button type="submit" className="w-full bg-emerald-900 text-white py-2 px-4 rounded-md hover:border-emerald-400">Login</button>
            </form>
            <Link to="/" className="text-blue-700 hover:underline mt-4 block text-center">Não tem uma conta? Cadastre-se</Link>
        </div>
    )
}

export default Login