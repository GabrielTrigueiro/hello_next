import Link from "next/link";
import { useRouter } from "next/router";

export default function Todo() {

    const router = useRouter()

    const todoId = router.query.todoId

    return(
        <>
            <Link href="/">voltar</Link>
            <h1>Exbidindo o To do: {todoId}</h1>
            <p>comentário: lalala <Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link></p>
            <p>comentário: lalala <Link href={`/todos/${todoId}/comments/2`}>Detalhes</Link></p>
            <p>comentário: lalala <Link href={`/todos/${todoId}/comments/3`}>Detalhes</Link></p>
            <p>comentário: lalala <Link href={`/todos/${todoId}/comments/4`}>Detalhes</Link></p>
        </>
    )
}