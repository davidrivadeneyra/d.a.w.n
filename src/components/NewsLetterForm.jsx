import { useState } from 'react';
import { Loader, CheckCircle, AlertCircle } from 'lucide-react';

const NewsletterForm = ({ className = '' }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Verifica si el email es válido
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus('error');
            setMessage("Please enter a valid email address");
            return;
        }
    
        setStatus('loading');
    
        try {
            // Define la URL de la API desde las variables de entorno
            const apiUrl = import.meta.env.VITE_API_URL || 'https://www.hbg-watchtower.net';
    
            // Log para confirmar la URL
            console.log('API URL:', apiUrl);
    
            // Realiza la solicitud POST
            const response = await fetch(`${apiUrl}/api/newsletter/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setStatus('success');
                setMessage("Thanks for joining! Check your email for confirmation.");
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.error || "Failed to sign up. Please try again.");
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setStatus('error');
            setMessage("Connection error. Please try again later.");
        }
    };

    const getMessageStyles = () => {
        return status === 'error' ? 'text-red-500' : 'text-[#EDF67D]';
    };

    return (
        <>
        
        <div>
            <h2 className='title-h4 title-color pb-4'>Be the First to Know!</h2>
            <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row gap-4 mb-4'>
                <div className="relative h-12 lg:h-14 w-full md:w-64 rounded-lg bg-white/[0.08] hover:bg-white/[0.1] border border-white/10 flex flex-col px-4 py-2 gap-1 cursor-pointer">
                    <label className='text-[#EDF67D] left-4 top-[10px] text-xs lg:text-sm leading-none'>
                        Your email*
                    </label>
                    <input 
                        className='bg-transparent text-xs lg:text-sm w-full without-ring leading-none text-stone-200'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="zombie@mail.com"
                        disabled={status === 'loading'}
                    />
                </div>
                <div className="form-group">
                    <button 
                        type="submit" 
                        className="btn flex items-center justify-center gap-2"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader className="animate-spin" size={20} />
                                <span>Processing...</span>
                            </>
                        ) : 'Join the Fight!'}
                    </button>
                </div>
            </form>
            {message && (
                <div className={`flex items-center gap-2 text-sm ${getMessageStyles()}`}>
                    {status === 'error' && <AlertCircle size={16} />}
                    {status === 'success' && <CheckCircle size={16} />}
                    <span>{message}</span>
                </div>
            )}
        </div>
        </>
    );
};

export default NewsletterForm;