import axios from 'axios';
import { useCallback, useState } from 'react';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import  Input  from '@/components/Input'

const Auth = () => {
  // const router = useRouter();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  }, []);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      });

      // login();
    } catch (error) {
        console.log(error);
    }
  }, [email, name, password]);

  return (
    <div className="relative h-full w-full bg-[url('/images/nexflix.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <div className="flex flex-col justify-center items-center">
          <img width={50}height={50} src="/tt.png" className="h-12" alt="Logo" />
          <div className="bg-black bg-opacity-70 px-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-4 font-semibold">
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <Input
                type="password" 
                id="password" 
                label="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button onClick={variant === 'login' ? 'login' : register} className="bg-gradient-to-b 
        from-emerald-800  py-3 text-white rounded-md w-full mt-10 hover:bg-green-700 transition">
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            <div className="flex flex-row items-center gap-4 mt-5 justify-center">
              <div  className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FcGoogle size={32} />
              </div>
              <div  className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FaGithub size={32} />
              </div>
            </div>
            <p className="text-neutral-500 mt-5">
              {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
              <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

// export async function getServerSideProps() {
  //   // const session = await getSession(context);
  //   const session = 1
  
  //   if (session == 1) {
  //     return {
  //       redirect: {
  //         destination: '/',
  //         permanent: false,
  //       }
  //     }
  //   }
  
  //   return {
  //     props: {}
  //   }
  // }

    // const login = useCallback(async () => {
  //   try {
  //     await signIn('credentials', {
  //       email,
  //       password,
  //       redirect: false,
  //       callbackUrl: '/'
  //     });

  //     // router.push('/profiles');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [email, password]);