import Link from "next/link"
import styles from "../../styles/Todos.module.css"

export async function getStaticProps() {

    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await data.json()

    console.log(todos)

    return{
        props: {todos}
    }
}

export default function Todos({todos}) {
    return(
        <>
            <h1>Tarefas a serem feitas:</h1>
            <ul className={styles.todolist}>
                {todos.map((item) => (
                    <li key={item.id}>  
                        {item.title} - <Link href={`/todos/${item.id}`}>Ver mais</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}