import { useAuthContext } from '@/app/contexts/AuthContext'
import { useContentContext } from '@/app/contexts/ContentContext';
import { useState } from 'react'

export default function LoginContent() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<any>(null);
    const { emailSignIn } = useAuthContext(); 4
    const { content, setContent } = useContentContext();

    const handleSignIn = async () => {
        try {
            await emailSignIn(email, password);
            setContent(null);
        } catch (error) {
            setContent("login"); // funktioniert nicht
            setError(error);
        }
    }

    return (
        <>
            {content == 'login' &&
                (<>
                    {error ? (
                        <div className='fixed text-xl bg-slate-500 h-max w-max flex items-center flex-col border-4 border-dashed border-black [&>*]:w-max [&>*]:m-4 '>
                            <span className=''>Error: {error}</span>
                            <button onClick={() => setError(null)} className='border-2 border-dashed border-black'>Try again</button>
                        </div>
                    ) : (
                        <div className='fixed text-xl bg-slate-500 h-max w-max mt-[30%] grid grid-cols-5 grid-rows-3 items-end border-4 border-dashed border-black [&>*]:h-max [&>*]:m-4 [&>input]:mr-20 [&>input]:col-span-4 [&>input]:border-2 [&>input]:border-dashed [&>input]:border-black'>
                            <button onClick={() => setContent(null)} className='w-max justify-self-end self-start m-1 col-span-5'>X</button>
                            <label htmlFor="email" className='justify-self-end col-span-1'>E-Mail:</label>
                            <input onChange={(event) => { setEmail(event.target.value) }} type="email" name="email" id="email" />
                            <label htmlFor="password" className='justify-self-end col-span-1'>Password:</label >
                            <input onChange={(event) => { setPassword(event.target.value) }} type="password" name="password" id="password" />
                            <button onClick={handleSignIn} className='col-span-5 border-4 border-dashed border-black w-max justify-self-center p-2 bg-slate-700 text-white'>Login</button>
                        </div>
                    )
                    }
                </>)
            }
        </>
    )
}
