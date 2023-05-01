import { useEffect, useState } from "react"

import style from './ReposList.module.css'

const ReposList = () => {
    const [ repos , setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/staviasz/repos')
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, []);

    return (
        <div className="container">
            <ul className={style.list}>
                {repos.map(({id, name, language, html_url}) => (
                    <li className={style.listItem} key={id}>
                        <div className={style.itemName}>
                        <b>Nome:</b> {name}
                        </div>
                        <div className={style.itemLanguage}>
                        <b>Linguagem:</b> {language} 
                        </div>
                        <a className={style.itemLink} target="_blank" href={html_url}>Visitar no Gitbub</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposList