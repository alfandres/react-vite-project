import Layout from '../../Components/Layout';

function MyAccount() {

  // Datos ficticios de usuario
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St, Fakeville',
    profileImage: 'https://cdn.leonardo.ai/users/6ab3684c-fc21-43fa-9cdc-73a6d7959b08/generations/a6f2e293-9179-4897-ba89-366d774e317e/RPG_40_A_vividly_lit_cyberpunk_world_encapsulates_the_scene_of_0.jpg?w=512', // Reemplaza con la URL de la imagen de perfil
  }
    return (
      
        <Layout>
          <div className='bg-white p-6 rounded shadow-lg'>
            <div className='flex flex-col items-center space-y-4'>
              <img
                src={user.profileImage}
                alt='Imagen de perfil'
                className='rounded-full w-24 h-24 object-cover'
              />
              <h2 className='text-2xl font-semibold'>{user.name}</h2>
              <p className='text-gray-600'>{user.email}</p>
            </div>

            <div className='mt-6'>
              <h3 className='text-xl font-semibold'>Información del Usuario</h3>
              <ul className='list-disc list-inside mt-2'>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.address}</li>
              </ul>
            </div>
          </div>
        </Layout>
      
    );
  }
  
  export default MyAccount; 