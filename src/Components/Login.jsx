
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login()

{
  const navigate = useNavigate();
  const [getUsuario, setUsuario] = useState('');
  const [getContra, setContra] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [redirectToAdmin, setRedirectToAdmin] = useState(false); // Estado para la redirección

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      console.log(getUsuario, getContra)
      const response = await axios.get('http://127.0.0.1:8000/api/login', {
        params: {
          id_usuario: getUsuario,
          clave_acceso: getContra
        }
      });
      console.log('Respuesta de la API:', response.data.user.id_rol);
      console.log(response.data.user.id_rol)
      if (response != null) {
        localStorage.setItem('token', JSON.stringify(response.data));
        if (response.data.user.id_rol == 10)
        {
          console.log('dio 10')
        }
        else if (response.data.user.id_rol == 1){
          navigate('/Administrador');
          console.log('Dio 1')
        }
        else{
          setError('Usuario no administrador.');
        }
        //
      } else {
        setError('Credenciales incorrectas. Inténtalo nuevamente.');
      }


      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Credenciales incorrectas. Inténtalo nuevamente.'); // O algún mensaje de error apropiado
    }
  };


   // Si redirectToAdmin es true, redirecciona a la página de administrador
   if (redirectToAdmin) {
    return true;//<Navigate to="/administradorBD" replace={true} />;

  }
    return (
      
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                ¡Inicia tu sesion!
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 max-w">
                O {" "}
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    crea una cuenta
                </a>
            </p>
        </div>
    
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Correo electronico
                        </label>
                        <div className="mt-1">
                            <input id="email" name="email" type="text" autoComplete="email" required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your email address"
                                value={getUsuario} onChange={(e) => setUsuario(e.target.value)}
                                />
                        </div>
                    </div>
    
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>
                        <div className="mt-1">
                            <input id="password" name="password" type="password" autoComplete="current-password" required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your password"
                                value={getContra} onChange={(e) => setContra(e.target.value)}
                                />
                        </div>
                    </div>
                    {/* Boton inicio */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
                                />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                Recordar mi contraseña
                            </label>
                        </div>
    
                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>
    
                    <div>
                        <button 
                            onClick={handleLogin}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Iniciar Sesion 2
                        </button>
                    </div>
                    {/* Boton Final */}
                </form>
                <div className="mt-6">
    
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-100 text-gray-500">
                                O continuar con
                            </span>
                        </div>
                    </div>
    
                    <div className="mt-6 grid grid-cols-3 gap-3">
                        <div>
                            <a href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                    alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                                    alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
                                    alt="" />
                            </a>
                            {loading && <p className="mt-4 text-sm text-gray-600">Cargando...</p>}
                          {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
}