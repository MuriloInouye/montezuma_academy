import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        router.push('/');
    }, [router]);

    return (
        <div>
            <h1>404 - Página Não Encontrada</h1>
            <p>Redirecionando para a página inicial...</p>
        </div>
    );
}
